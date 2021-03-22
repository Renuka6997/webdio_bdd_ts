class UtilPage {
    
    doClick(element) {
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element, value : string) {
        element.waitForDisplayed();
        element.setValue(value);
    }

    doGetPageTitle() {
        return browser.getTitle();
    }

    scrollView(element){
        element.scrollIntoView();
        console.log("Is Visible ?", element.isDisplayedInViewport());
    }

    moveToElement(element) {
        element.waitForDisplayed();
        element.moveTo();
    }

    doWait(element) {
        browser.waitUntil(
            () => browser.getTitle() === element ,
            {
                timeout: 10000,
                timeoutMsg: 'expected title is not visible after 10s'
            }
        );
    }
}
export default new UtilPage();
