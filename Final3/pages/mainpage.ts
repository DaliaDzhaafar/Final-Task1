import { Locator, Page } from "@playwright/test"

export class MainPage {
    private readonly HomeAndFlatbutton: Locator;
    private readonly BuyFlat
    private readonly Catalog
    private readonly Autolist
    private readonly NewsButton
    constructor(page: Page) {
    this.HomeAndFlatbutton = page.locator('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[4]/a/span')
    this.BuyFlat = page.locator('//*[@id="search-filter"]/div/div[2]/label[1]/span')
    this.Catalog = page.locator('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[1]/a[2]/span')
    this.Autolist = page.locator('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[3]/a/span')
    this.NewsButton = page.locator('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[2]/a/span')
    }

async openWebsite(page: Page) : Promise<void> {
    await page.goto("https://www.onliner.by/")
    }
async Catalogclick() {
    await this.Catalog.click()
}
async HomeAndFlatclick(){
    await this.HomeAndFlatbutton.click()
    }   
async BuyFlatclick(){
    await this.BuyFlat.click()
    }  
async NewsButtonclick(){
        await this.NewsButton.click()
    }
async Autolistclick(){
    await this.Autolist.click()
    } 
}