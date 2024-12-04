class BasePage {
  // Shared Locators
  buttonGetStarted(): WebdriverIO.Element {
    return $('~button_get_started_landing');
  }

  // Shared Methods
  async clickGetStartedButton(): Promise<void> {
    await this.buttonGetStarted().click();
  }

  async setCheckbox(checkboxElement: WebdriverIO.Element, shouldBeChecked: boolean): Promise<void> {
    if (await checkboxElement.getValue() === '1') { // if box is checked
      if (!shouldBeChecked) { // and it shouldn't be
        await checkboxElement.click(); // click it
      }
    } else { // if box is not checked
      if (shouldBeChecked) { // and it should be
        await checkboxElement.click(); // click it
      }
    }
  }
}

export default new BasePage();
