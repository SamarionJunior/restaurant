/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import {  type FunctionComponent } from "react";
/// TYPESCRIPT ///
import Span from "../components/Span.tsx";

type PropsKeyValue = {
  classNameParent?: string;
  classNameChildren?: string;
  keyName: string;
  value: string;
}

const KeyValue: FunctionComponent<PropsKeyValue> = (props: PropsKeyValue) => {

  const keyName = props.keyName;
  const value = props.value;

  const classNameParent = "";
  const classNameChildren = "";
  const classNameParentFinal = props?.classNameParent == undefined ? classNameParent : `${classNameParent} ${props.classNameParent}`;
  const classNameChildrenFinal = props?.classNameChildren == undefined ? classNameChildren : `${classNameChildren} ${props.classNameChildren}`;

  return (
    <span className={classNameParentFinal}>
      <Span className={classNameChildrenFinal}>{keyName}</Span>
      <Span className={classNameChildrenFinal}>{value} &#20;</Span>
    </span>
  );
}

export default KeyValue;