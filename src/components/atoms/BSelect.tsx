import React from "react";
import { SelectOption } from "../../types";
import "../../scss/components/atoms/BSelect.scss";

type Props<T extends string> = {
  value: string;
  disabled: boolean;
  options: (SelectOption<T> & { explain?: string })[];
  explain?: string;
  changeSelect: (value: T) => void;
};

const BSelect: <T extends string>(
  p: Props<T>
) => React.ReactElement<Props<T>> = <T extends string>(props: Props<T>) => {
  // TOOD: リアクティブに動くよう修正
  const styleVariables: Record<string, string> = {
    "--border-radius": props.explain ? "0.4rem 0.4rem 0 0" : "0.4rem",
  };

  return (
    <div
      className={"a_select" + (props.disabled ? " disabled" : "")}
      style={styleVariables}
    >
      <div className="a_select_icon">
        <i className="fas fa-chevron-down fa-2x"></i>
      </div>
      <select
        className={"a_select_select" + (props.disabled ? " disabled" : "")}
        value={props.value}
        onChange={(event) => props.changeSelect(event.currentTarget.value as T)}
      >
        {props.options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BSelect;
