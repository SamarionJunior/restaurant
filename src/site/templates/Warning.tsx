/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Layout.scss"
/// IMAGE ///
import {  type FunctionComponent } from "react";
/// TYPESCRIPT ///
import LayoutLayout from "./Layout.tsx";
import type { PropsWarning } from "../../typescript/types.ts";

const Warning: FunctionComponent<PropsWarning> = (props: PropsWarning) => {

  return (
      <LayoutLayout id={props.id} className={props.className}>
        <div>{props.message}</div>
      </LayoutLayout>
  );

}

export default Warning;