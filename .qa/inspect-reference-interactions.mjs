import { chromium } from "playwright";

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";

function serializeElement(el) {
  if (!el) {
    return null;
  }

  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);

  return {
    tag: el.tagName,
    className: String(el.className),
    text: el.textContent.trim().replace(/\s+/g, " ").slice(0, 140),
    rect: {
      x: Math.round(rect.x),
      y: Math.round(rect.y),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    },
    style: {
      display: style.display,
      opacity: style.opacity,
      transform: style.transform,
      transition: style.transition,
      color: style.color,
      backgroundColor: style.backgroundColor,
      position: style.position,
      overflow: style.overflow,
      clipPath: style.clipPath,
    },
  };
}

async function run() {
  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
  });

  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });

  await desktop.goto("https://www.thymeandcaramel.com/", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await desktop.waitForTimeout(2500);

  const desktopScroll = [];
  for (const y of [0, 500, 1200, 2600, 5200, 8500, 12000]) {
    await desktop.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await desktop.waitForTimeout(700);
    desktopScroll.push(
      await desktop.evaluate(
        ({ yValue, serialize }) => {
          const get = new Function("el", `return (${serialize})(el);`);
          const header = document.querySelector("header");
          const nav = document.querySelector("header nav");
          const links = [...document.querySelectorAll("header a")].slice(0, 4).map((link) => ({
            text: link.textContent.trim(),
            color: getComputedStyle(link).color,
            opacity: getComputedStyle(link).opacity,
          }));
          const motionTargets = [
            ...document.querySelectorAll(
              ".fade-up-target,.fade-up,.ui-underline-anim,.button,[class*=reveal],[class*=parallax],[class*=mask]",
            ),
          ]
            .slice(0, 18)
            .map((el) => get(el));

          return {
            y: yValue,
            header: get(header),
            nav: get(nav),
            links,
            motionTargets,
          };
        },
        { yValue: y, serialize: serializeElement.toString() },
      ),
    );
  }

  await desktop.evaluate(() => window.scrollTo(0, 6000));
  await desktop.waitForTimeout(800);

  const product = desktop.locator("a", { hasText: "Last-Minute Ready Cake" }).first();
  const productBefore = await product
    .evaluate(
      (el, serialize) => {
        const get = new Function("el", `return (${serialize})(el);`);
        return {
          link: get(el),
          buttons: [...el.querySelectorAll("button")].map((button) => get(button)),
          images: [...el.querySelectorAll("img")].map((image) => get(image)),
        };
      },
      serializeElement.toString(),
    )
    .catch((error) => String(error));
  await product.hover().catch(() => {});
  await desktop.waitForTimeout(450);
  const productAfter = await product
    .evaluate(
      (el, serialize) => {
        const get = new Function("el", `return (${serialize})(el);`);
        return {
          link: get(el),
          buttons: [...el.querySelectorAll("button")].map((button) => get(button)),
          images: [...el.querySelectorAll("img")].map((image) => get(image)),
        };
      },
      serializeElement.toString(),
    )
    .catch((error) => String(error));

  await desktop.evaluate(() => document.querySelector("#faqs")?.scrollIntoView({ block: "center" }));
  await desktop.waitForTimeout(900);
  const faqBefore = await desktop
    .locator("#faqs button")
    .first()
    .evaluate((el, serialize) => {
      const get = new Function("el", `return (${serialize})(el);`);
      return get(el);
    }, serializeElement.toString())
    .catch((error) => String(error));
  await desktop.locator("#faqs button").first().click().catch(() => {});
  await desktop.waitForTimeout(500);
  const faqAfter = await desktop
    .locator("#faqs")
    .evaluate((el, serialize) => {
      const get = new Function("el", `return (${serialize})(el);`);
      return {
        text: el.innerText.slice(0, 700),
        rows: [...el.querySelectorAll("button,[style]")].slice(0, 20).map((row) => get(row)),
      };
    }, serializeElement.toString())
    .catch((error) => String(error));

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 900 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 1,
  });

  await mobile.goto("https://www.thymeandcaramel.com/", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await mobile.waitForTimeout(2500);

  const mobileInitial = await mobile.evaluate((serialize) => {
    const get = new Function("el", `return (${serialize})(el);`);
    return {
      header: get(document.querySelector("header")),
      buttons: [...document.querySelectorAll("header button")].map((button) => get(button)),
      fixed: [...document.querySelectorAll("body *")]
        .filter((el) => getComputedStyle(el).position === "fixed")
        .slice(0, 8)
        .map((el) => get(el)),
    };
  }, serializeElement.toString());

  await mobile.locator("button", { hasText: "Menu" }).first().click();
  await mobile.waitForTimeout(900);
  const mobileOpen = await mobile.evaluate((serialize) => {
    const get = new Function("el", `return (${serialize})(el);`);
    return {
      bodyOverflow: getComputedStyle(document.body).overflow,
      buttons: [...document.querySelectorAll("button")].slice(0, 10).map((button) => get(button)),
      fixed: [...document.querySelectorAll("body *")]
        .filter((el) => getComputedStyle(el).position === "fixed")
        .slice(0, 12)
        .map((el) => get(el)),
      visibleText: document.body.innerText.slice(0, 900),
    };
  }, serializeElement.toString());

  await browser.close();

  console.log(
    JSON.stringify(
      {
        desktopScroll,
        productBefore,
        productAfter,
        faqBefore,
        faqAfter,
        mobileInitial,
        mobileOpen,
      },
      null,
      2,
    ),
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
