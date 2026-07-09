import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const LOCAL_URL = "http://localhost:5173/";
const chromeExecutablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const viewports = [
  {
    name: "desktop-1440",
    width: 1440,
    height: 1000,
  },
  {
    name: "desktop-1920",
    width: 1920,
    height: 1080,
  },
  {
    name: "tablet-1024",
    width: 1024,
    height: 1366,
  },
  {
    name: "mobile-430",
    width: 430,
    height: 932,
  },
  {
    name: "mobile-390",
    width: 390,
    height: 844,
  },
  {
    name: "mobile-360",
    width: 360,
    height: 800,
  },
];

const outputDir = path.resolve("local-captures");

await fs.mkdir(outputDir, {
  recursive: true,
});

let browser;

try {
  browser = await chromium.launch({
    headless: true,
  });
} catch (error) {
  if (!String(error.message).includes("Executable doesn't exist")) {
    throw error;
  }

  browser = await chromium.launch({
    executablePath: chromeExecutablePath,
    headless: true,
  });
}

try {
  for (const viewport of viewports) {
    console.log(`Capturing ${viewport.name}...`);

    const context = await browser.newContext({
      viewport: {
        width: viewport.width,
        height: viewport.height,
      },
      deviceScaleFactor: 1,
    });

    const page = await context.newPage();

    await page.goto(LOCAL_URL, {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    await page.waitForTimeout(2000);

    // Scroll through the page to trigger lazy-loaded images.
    await page.evaluate(async () => {
      const sleep = (ms) =>
        new Promise((resolve) => setTimeout(resolve, ms));

      const scrollStep = Math.max(
        400,
        Math.floor(window.innerHeight * 0.7)
      );

      for (
        let y = 0;
        y < document.body.scrollHeight;
        y += scrollStep
      ) {
        window.scrollTo(0, y);
        await sleep(200);
      }

      window.scrollTo(0, 0);
      await sleep(500);
    });

    await page.screenshot({
      path: path.join(
        outputDir,
        `${viewport.name}-full.png`
      ),
      fullPage: true,
    });

    console.log(`✓ Saved ${viewport.name}`);

    await context.close();
  }
} catch (error) {
  console.error("Capture failed:", error);
  process.exitCode = 1;
} finally {
  await browser.close();
}

console.log("Done.");
