import "nightwatch";
import { InsurancePage } from "../page-objects";

export interface CustomPageObjects {
  InsuranceAuto: {
    InsurancePage: () => InsurancePage;
  };
}
