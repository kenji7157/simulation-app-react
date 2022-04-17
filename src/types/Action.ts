import {CompanyTypes} from './CompanyTypes'
import {PlanTypes} from './PlanTypes'

export type Action =
  | { type: 'setFirestZipCode'; value: string }
  | { type: 'setSecondZipCode'; value: string }
  | { type: 'setCompanyType'; value: CompanyTypes }
  | { type: 'setPlanType'; value: PlanTypes }
  | { type: 'setAmpere'; value: string }
  | { type: 'setPay'; value: string }
  | { type: 'setEmail'; value: string };
