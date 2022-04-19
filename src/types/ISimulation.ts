import { AreaTypes } from "./AreaTypes";
import { CompanyTypes } from "./CompanyTypes";
import { PlanTypes } from "./PlanTypes";

/** シミュレーションデータ(入力) */
export type ISimulation = {
  /** 郵便番号(前半) */
  firstZipCode: string;
  /** 郵便番号(後半) */
  secondZipCode: string;
  /** エリア */
  area: AreaTypes;
  /** 会社 */
  company: CompanyTypes;
  /** プラン */
  plan: PlanTypes;
  /** 契約容量 */
  ampere: string;
  /** 支払金額 */
  pay: string | number;
  /** メールアドレス */
  email: string;
};
