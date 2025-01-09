const { test, describe, expect } = require('@playwright/test')

describe('Navigate', () => {
  test('pokemon page can be opened from the home page', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await page.getByText('squirtle').click()
    await expect(page.getByText('Torrent')).toBeVisible()
  })
})