/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import { type FunctionComponent } from "react";
/// TYPESCRIPT ///

export const PageControllers: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      <button className="Button" onClick={props.onClickBack}>
        {props.buttonBack}
      </button>
      <button className="Button" onClick={props.onClickNext}>
        {props.buttonNext}
      </button>
    </div>
  );
}

export default PageControllers;