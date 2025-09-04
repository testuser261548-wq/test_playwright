import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage2user:RodeteQuakenDuttDreherAf@mini-de-awsint-m2.int.miniweb.eu-central-1.aws.bmw.cloud/de_DE/home.html');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('link', { name: 'Modelle', exact: true }).click();
  await page.getByRole('button', { name: 'All-Electric MINI Aceman' }).getByRole('link').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'All-Electric MINI Countryman' }).click();
  await page.getByRole('button', { name: 'MINI Cooper 5-door Combustion' }).getByRole('link').click();
  await page.getByRole('button', { name: 'Close' }).click();
});