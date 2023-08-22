import { Locator, Page } from "@playwright/test"
import { MainPage } from "./mainpage";

export class ContactPage extends MainPage {
    public readonly Connect 
    private readonly ContactPagebutton: Locator;
    constructor(page:Page) {
        super(page);
        this.Connect = page.getByText("Как быстро связаться с редакцией")
        this.ContactPagebutton = page.locator('//*[@href="https://people.onliner.by/contacts"]')
    }

    async openContactPageClick(){
        await this.ContactPagebutton.click()
    }
}