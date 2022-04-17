import { AreaTypes } from "./AreaTypes";
import { CompanyTypes } from "./CompanyTypes";
import { PlanTypes } from "./PlanTypes";

// リクエスト(結果を見る押下)時の型定義
export type Simulation = {
  /** 郵便番号 */
  zipCode: string;
  /** エリア */
  area: AreaTypes;
  /** 会社 */
  company: CompanyTypes;
  /** プラン */
  plan: PlanTypes;
  /** 契約容量 */
  ampere: string;
  /** 支払金額 */
  pay: number;
  /** メールアドレス */
  email: string;
  }
  