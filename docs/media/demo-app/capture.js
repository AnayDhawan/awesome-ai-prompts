const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const outDir = path.join(__dirname, 'out');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 },
    recordVideo: {
      dir: outDir,
      size: { width: 1200, height: 800 },
    },
  });

  const page = await context.newPage();

  await page.goto('http://localhost:3099');

  // Wait for all animations to complete
  // Scene 1: ~5s chat, transition: ~0.8s, Scene 2: ~12s
  await page.waitForTimeout(30000);

  // Close browser to finalize video
  await context.close();
  await browser.close();

  console.log('Capture complete. Video saved to:', outDir);
})();
