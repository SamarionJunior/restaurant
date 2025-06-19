/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import { type FunctionComponent } from "react";
import { Text } from "../components/components";
/// TYPESCRIPT ///

export const Description: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      <Text className="Text">
        {props.text}
      </Text>
    </div>
  );
}

export default Description;