import { Locator, Page } from "@playwright/test"
import { MainPage } from "./mainpage"

export class NewsPage1 extends MainPage {
    public readonly Wallet
    public readonly Auto
    public readonly Tech
    public readonly Estate
    constructor(page:Page) {
        super(page);
        this.Wallet = page.locator ('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[2]/div/div/div/div/div[1]/div[1]/a')
        this.Auto = page.locator('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[2]/div/div/div/div/div[2]/div[1]/a')
        this.Tech = page.locator('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[2]/div/div/div/div/div[3]/div[1]/a')
        this.Estate = page.locator('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[2]/div/div/div/div/div[4]/div[1]/a')
    }
    async openNewsPage(page: Page) : Promise<void> {
        await page.goto("https://www.onliner.by/")
    }

}