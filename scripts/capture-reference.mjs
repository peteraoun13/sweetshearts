import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const REFERENCE_URL = "https://www.thymeandcaramel.com/";

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

const outputDir = path.resolve("reference-captures");

await fs.mkdir(outputDir, {
  recursive: true,
});

const browser = await chromium.launch({
  headless: true,
});

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

    await page.goto(REFERENCE_URL, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    console.log("Waiting for the website to load...");

    await page.waitForTimeout(5000);

    // Scroll through the whole page.
    // This helps load lazy-loaded images.
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
        await sleep(300);
      }

      window.scrollTo(0, 0);
      await sleep(1000);
    });

    // Save complete page screenshot
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