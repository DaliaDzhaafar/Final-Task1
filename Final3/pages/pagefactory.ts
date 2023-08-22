import { Locator, Page } from "@playwright/test";
import { MainPage } from "./mainpage";
import { NewsPage1 } from "./newspage";
import { ContactPage } from "./contactpage";

export class PagesFactory {
    static getPage(page: Page, pageName: string) {
        switch (pageName){
            case "news":
            return new NewsPage1(page)
            case "main":
            return new MainPage(page)
            case "contact":
            return new ContactPage(page)
        }
    }
}