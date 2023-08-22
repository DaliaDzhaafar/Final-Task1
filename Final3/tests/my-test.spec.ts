// #### Task 3 💻
// - Реализовать тестовый фреймвор для UI тестирования для web приложения https://www.onliner.by/:
// 	- тестовый фреймворк брать на свое усмотрение: WDIO + cucumber, cypress или playwright
// 	- использовать изученные паттерны: Page Object, Page Factory
// 	- Добавить allure репортер
// 	- Использовать различные локаторы и селекторы
// 	- Организовывать тесты в группы


import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainpage";
import { PagesFactory } from "../pages/pagefactory";
import { NewsPage1 } from "../pages/newspage";
import { ContactPage } from "../pages/contactpage";
import { logger } from "../utils/log.conf";

test.describe("Check news website", async () => {

test(" Test 1 - Check sections title", async ({ page }) => {
    logger.debug("First log message")
    const mainPage1 = PagesFactory.getPage(page, "main") as MainPage
    await mainPage1.openWebsite(page); 
    expect(await page.title()).toBe("Onlíner")
    await mainPage1.Catalogclick()
    expect(await page.title()).toBe("Каталог Onlíner")
    await mainPage1.openWebsite(page);
    await mainPage1.NewsButtonclick()
    expect(await page.title()).toBe("Onlíner")
    await mainPage1.openWebsite(page)
    await mainPage1.Autolistclick()
    expect(await page.title()).toBe("Автобарахолка")

})
test(" Test 2 - Check news page sections", async ({ page }) => {
    const NewsPage = PagesFactory.getPage(page, "news") as NewsPage1
    await NewsPage.openWebsite(page);
    await NewsPage.NewsButtonclick()
    await page.waitForTimeout(1000);
    expect(await page.title()).toBe("Onlíner")
    expect(await NewsPage.Wallet).toBeTruthy
    expect(await NewsPage.Auto).toBeTruthy
    expect(await NewsPage.Tech).toBeTruthy
    expect(await NewsPage.Estate).toBeTruthy
})
test(" Test 3 - Check contacts Phone", async ({ page }) => {
    const mainPage3 = PagesFactory.getPage(page, "contact") as ContactPage
    await mainPage3.openWebsite(page);
    await mainPage3.openContactPageClick();
    expect(await page.textContent).toBeTruthy
    expect(await mainPage3.Connect).toBeDefined
})
// test(" Test 4 - Check Goolge Map", async ({ page }) => {
//     const mainPage3 = PagesFactory.getPage(page, "contact") as ContactPage
//     await mainPage3.openWebsite3(page);
//     await mainPage3.Mappageclick()
//     expect(await page.title()).toContain("Контакты")
// })

test(" Test 5 - Home and flat page", async ({ page }) => {
    const mainPage3 = PagesFactory.getPage(page, "main") as MainPage
    await mainPage3.openWebsite(page);
    await mainPage3.HomeAndFlatclick()
    await mainPage3.BuyFlatclick()
    await page.waitForTimeout(1000);
    expect(await page.title()).toBe('Купить квартиру в Минске')
})

})