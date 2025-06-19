/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import { type FunctionComponent } from "react";
import { Action, Display, Text } from "../components/components";
import { GrFormSubtract } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
/// TYPESCRIPT ///

export const SubActions: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      <Action className="Action">
        <button className="Button" onClick={props.onClickSub}>
          <GrFormSubtract className="Icon"/>
        </button>
      </Action>
      <Display className="Display">
        <Text className="Text">
          {props.display}
        </Text>
      </Display>
      <Action className="Action">
        <button className="Button" onClick={props.onClickAdd}>
          <MdAdd className="Icon"/>
        </button>
      </Action>
      {props?.labelTotal}
      {props?.buttonRemove}
    </div>
  );
}

export default SubActions;