import 'nightwatch';
import { GoogleResultsPage, GoogleSearchPage, InsurancePage} from '../page-objects';

export interface CustomPageObjects {
  InsuranceAuto: {
    InsurancePage: () => InsurancePage;
  }
}