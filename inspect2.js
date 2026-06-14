const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/home/thebid/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome', headless: true });
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:8090/testimg.html');
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/testimg.png' });
  await ctx.close();
  await browser.close();
})();
