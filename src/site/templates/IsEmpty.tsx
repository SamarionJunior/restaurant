/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import { type FunctionComponent, type ReactNode } from "react";
import Warning from "./Warning";
import type { PropsWarning } from "../../typescript/types";
/// TYPESCRIPT ///

type PropsIsEmpty = {
  test: boolean;
  WarningProps: PropsWarning;
  children: ReactNode;
}

export const IsEmpty: FunctionComponent<PropsIsEmpty> = (props: PropsIsEmpty) => {

  if(props.test){
    return (
      <Warning
        id={props.WarningProps.id}
        className={props.WarningProps.className}
        message={props.WarningProps.message}
      />
    );
  }

  return props.children;
}

export default IsEmpty;