import { chromium } from "playwright";

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const localUrl = "http://localhost:5173/";

async function run() {
  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
  });

  const errors = [];
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(localUrl, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1200);

  const headerState = await page.evaluate(() => {
    const header = document.querySelector(".navbar");
    const style = getComputedStyle(header);
    return {
      position: style.position,
      top: style.top,
      transparent: header.classList.contains("navbar--transparent"),
    };
  });

  await page.locator(".reference-filter button", { hasText: "Wedding" }).click();
  const filterState = await page.evaluate(() =>
    [...document.querySelectorAll(".reference-filter button")].map((button) => ({
      text: button.textContent.trim(),
      pressed: button.getAttribute("aria-pressed"),
      active: button.classList.contains("is-active"),
    })),
  );

  await page.locator(".reference-product-card__image").first().hover();
  await page.waitForTimeout(450);
  const productHover = await page
    .locator(".reference-product-card__action")
    .first()
    .evaluate((el) => getComputedStyle(el).opacity);

  await page.locator(".reference-faq__trigger").first().click();
  await page.waitForTimeout(380);
  const faqFirstOpen = await page.locator(".reference-faq__trigger").first().getAttribute("aria-expanded");
  await page.locator(".reference-faq__trigger").nth(1).click();
  await page.waitForTimeout(380);
  const faqState = await page.evaluate(() =>
    [...document.querySelectorAll(".reference-faq__trigger")].slice(0, 2).map((button) => ({
      text: button.textContent.trim(),
      expanded: button.getAttribute("aria-expanded"),
    })),
  );

  await context.close();

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 1,
  });
  const mobile = await mobileContext.newPage();
  mobile.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  mobile.on("pageerror", (error) => errors.push(error.message));
  await mobile.goto(localUrl, { waitUntil: "networkidle", timeout: 60000 });
  await mobile.waitForTimeout(1200);
  await mobile.locator(".navbar__menu-button").click();
  await mobile.waitForTimeout(700);
  const mobileOpen = await mobile.evaluate(() => ({
    dialog: Boolean(document.querySelector(".mobile-menu[role='dialog']")),
    bodyOverflow: getComputedStyle(document.body).overflow,
    closeFocused: document.activeElement?.classList.contains("mobile-menu__close") || false,
  }));
  await mobile.keyboard.press("Escape");
  await mobile.waitForTimeout(600);
  const mobileClosed = await mobile.evaluate(() => !document.querySelector(".mobile-menu"));
  await mobileContext.close();

  const reducedContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    reducedMotion: "reduce",
    deviceScaleFactor: 1,
  });
  const reduced = await reducedContext.newPage();
  reduced.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  reduced.on("pageerror", (error) => errors.push(error.message));
  await reduced.goto(localUrl, { waitUntil: "networkidle", timeout: 60000 });
  await reduced.locator(".navbar__menu-button").click();
  await reduced.waitForTimeout(100);
  const reducedMenuUsable = await reduced.evaluate(() => Boolean(document.querySelector(".mobile-menu__link")));
  await reducedContext.close();

  await browser.close();

  console.log(
    JSON.stringify(
      {
        headerState,
        filterState,
        productHover,
        faqFirstOpen,
        faqState,
        mobileOpen,
        mobileClosed,
        reducedMenuUsable,
        errors,
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
