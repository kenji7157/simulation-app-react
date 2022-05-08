/** セレクタオプションの型定義 */
export type SelectOption<T> = {
  /** 値 */
  value: T;
  /** ラベル文言 */
  label: string;
  /** 選択状態 */
  selected?: boolean;
};
