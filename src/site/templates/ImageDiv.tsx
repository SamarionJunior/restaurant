/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import { type FunctionComponent } from "react";
import { Image } from "../components/components";
/// TYPESCRIPT ///

export const ImageDiv: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      <Image className="Img" src={props.srcName}></Image>
    </div>
  );
}

export default ImageDiv;