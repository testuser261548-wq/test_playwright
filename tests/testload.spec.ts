import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage2user:RodeteQuakenDuttDreherAf@mini-de-awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud/de_DE/home.html');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('button', { name: 'News' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});