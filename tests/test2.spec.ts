import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage2user:RodeteQuakenDuttDreherAf@mini-de-awsint-m2.int.miniweb.eu-central-1.aws.bmw.cloud/de_DE/home.html');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('link', { name: ' disclaimer' }).first().click();
  await page.getByRole('button', { name: 'undefined' }).click();
  await page.getByRole('button', { name: 'MyMini Bereich' }).click();
  await page.getByRole('link', { name: 'Close' }).click();
});