  import { EnhancedPageObject, NightwatchAPI, PageObjectModel } from 'nightwatch';

  const insurancePageCommands = {
    clickQuotaRateButton(this: NightwatchAPI) {
      return this.click('@quotaRateButton');
    },
    clickSearchbyPlateButton(this: NightwatchAPI) {
      return this.click('@searchByPlateButton');
    },
    clickSubmitButton(this: NightwatchAPI) {
      return this.click('@submitButton');
    },
    closeConsentPopup(this: NightwatchAPI) {
      return this.click('@popUpConsent');
    }
  };
  

  const insurancePage = {
    url: 'https://www.ornikar.com/assurance-auto',
    commands: [insurancePageCommands],
    elements: {
      insuranceDropdown: {
        selector: '#w-dropdown-toggle-1',
      },
      quotaRateButton: {
        selector: "//a[contains(text(), \"J'obtiens mon tarif\")]",
        locateStrategy: 'xpath'
      },
      searchByPlateButton: {
        selector: '//div[contains(text(), "Rechercher par plaque")]',
        locateStrategy: 'xpath'
      },
      inputPlateNumber: {
        selector: '#vehiculeImmatriculation'
      },
      submitButton: {
       selector: '//button[@type="submit" and not(@disabled) and not(@hidden)]',
        locateStrategy: 'xpath'
      },
      submitButtonDisabled: {
        selector: '//button[@type="submit" and @disabled]',
        locateStrategy: 'xpath'
      },
      popUpConsent: {
        selector: '#axeptio_btn_acceptAll'
      },
      errorMessagePlateNumber: {
        selector: '//div[contains(text(), "Votre numéro de plaque ne semble pas fonctionner ? Essayez la recherche par marque")]',
        locateStrategy: 'xpath'
      }
    },
  } satisfies PageObjectModel;
  
  export default insurancePage;
  
  export interface AssurancePage
    extends EnhancedPageObject<
      typeof insurancePageCommands,
      typeof insurancePage.elements
    > {}