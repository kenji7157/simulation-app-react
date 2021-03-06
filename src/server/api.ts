import { areaTypes, AreaTypes, ISimulation, Simulation } from "../types";
import { isValidZipCode } from "../util/validationUtil";

export function sendSimulationData(simulationData: ISimulation): void {
  // NOTE: 型を変換し値を出力
  const request: Simulation = {
    zipCode: simulationData.firstZipCode + simulationData.secondZipCode,
    area: simulationData.area,
    company: simulationData.company,
    plan: simulationData.plan,
    ampere: simulationData.ampere,
    pay: Number(simulationData.pay),
    email: simulationData.email,
  };
  alert(
    `
    【結果を見る(入力値の確認)】\n
    郵便番号：${request.zipCode}\n
    エリア：${request.area}\n
    会社：${request.company}\n
    プラン：${request.plan}\n
    契約容量：${request.ampere}\n
    支払金額：${request.pay}\n
    メールアドレス：${request.email}
    `
  );
}

// TODO: 後にサーバサイドのAPIを利用してエリアを判定する
export function areaCheck(
  firstZipCode: string,
  secondZipCode: string
): AreaTypes {
  if (!isValidZipCode(firstZipCode, secondZipCode)) {
    return areaTypes.OTHER;
  } else if (firstZipCode.slice(0, 1) === "1") {
    return areaTypes.TOKYO;
  } else if (firstZipCode.slice(0, 1) === "5") {
    return areaTypes.KANSAI;
  } else {
    return areaTypes.OTHER;
  }
}
