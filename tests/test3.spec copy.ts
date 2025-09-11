import { test, expect } from '@playwright/test';

test('test3', { tag: ['@copytest3'] },async ({ page }) => {
  await page.goto('https://stage2user:RodeteQuakenDuttDreherAf@mini-de-awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud/de_DE/home.html');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('button', { name: 'Modelle' }).click();
  await expect(page.getByText('DER NEUE VOLLELEKTRISCHE MINI')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
});