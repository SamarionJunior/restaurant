/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import {  type FunctionComponent } from "react";
/// TYPESCRIPT ///
// import Span from "../components/Span.tsx";
// import { Contents } from "../../typescript/content.ts";
// import { Product } from "../components/components.tsx";

// const getContentsLabels = <T, K extends keyof T>(object: T, property: K): T[K] => object[property];

// const capitalizeFirstLetter = <T, K extends keyof T>(word: string): K => word.charAt(0).toUpperCase() + word.slice(1);

export const Data: FunctionComponent<any> = props => {

  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default Data;