/// CSS ///
import "../../css/global/pre-sets.scss"
/// REACT ///
import { type FunctionComponent, type JSX } from "react";
import { Information, Product } from "../components/components";
import ImageDiv from "./ImageDiv";
import Title from "./Title";
import Description from "./Description";
import type { ProductType } from "../../typescript/types";
/// TYPESCRIPT ///

type PropsProductHorizontal = {
  className: string;
  product: ProductType;
  onClick: (e: any) => void;
  Data: JSX.Element;
  SubActions?: JSX.Element;
}

export const ProductHorizontal: FunctionComponent<PropsProductHorizontal> = (props: PropsProductHorizontal) => {
  return (
    <Product className="Product-Horizontal" onClick={props.onClick}>
      <ImageDiv className="Image" srcName={props.product.image}/>
      <Information className="Information">
        <Title className="Title" text={props.product.name}/>
        <Description className="Description" text={props.product.description}/>
        {props.Data}
        {props?.SubActions}
      </Information>
    </Product>
  );
}

export default ProductHorizontal;