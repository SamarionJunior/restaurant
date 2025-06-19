/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import {  type FunctionComponent } from "react";
/// TYPESCRIPT ///
import type { PropsComponentDefault } from "../../typescript/props.ts";

const Span: FunctionComponent<PropsComponentDefault> = (props: PropsComponentDefault) => {

  return (
    <span className={props.className}>
      {props.children}
    </span>
  );
}

export default Span;