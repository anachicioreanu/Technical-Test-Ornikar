import { NightwatchTests, NightwatchAPI } from "nightwatch";

const insuranceTest: NightwatchTests = {
  beforeEach: (browser: NightwatchAPI) => {
    browser.page.InsuranceAuto.InsurancePage().navigate();
    browser.window.maximize();
  },
  "1. Landing on the Ornikar insurance auto page test": (
    browser: NightwatchAPI,
  ) => {
    const insurancePage = browser.page.InsuranceAuto.InsurancePage();
    insurancePage.closeConsentPopup();
    insurancePage.assert.titleEquals(
      "Assurance auto : Devis et simulation en ligne gratuits",
    );
  },

  "2. Liscense plate input form validation test - invalid entries": (
    browser: NightwatchAPI,
  ) => {
    const insurancePage = browser.page.InsuranceAuto.InsurancePage();
    insurancePage
      .clickQuotaRateButton()
      .clickSearchbyPlateButton()
      .waitForElementPresent("@submitButtonDisabled")
      .setValue("@inputPlateNumber", "123456")
      .waitForElementPresent("@submitButton")
      .clickSubmitButton()
      .waitForElementVisible("@errorMessagePlateNumber");
    insurancePage
      .setValue("@inputPlateNumber", "-")
      .clickSubmitButton()
      .waitForElementPresent("@submitButtonDisabled")
      .waitForElementVisible("@errorMessagePlateNumber");
    insurancePage
      .setValue("@inputPlateNumber", "FY847F")
      .clickSubmitButton()
      .waitForElementPresent("@submitButtonDisabled")
      .waitForElementVisible("@errorMessagePlateNumber");
  },
  after: (browser: NightwatchAPI) => {
    browser.end();
  },
};

export default insuranceTest;
