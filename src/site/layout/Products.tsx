/// CSS ///
import "../../css/pre-sets.scss"
import "../../css/components/Products.scss"
/// IMAGE ///
import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductShow } from "../../data/redux/slices/restaurant/productsSlice.ts";
/// TYPESCRIPT ///
import { arrayIsEmpty, checkIfUndefined, isNaturalNumber } from "../../typescript/functions.ts";
import { Count, Data, Description, Image, ImageDiv, Information, Label, Price, Product, Products, Text, Title } from "../components/components.tsx";

const ProductsLayout: FunctionComponent<any> = _ => {

  const dispatch = useDispatch();

  const items = useSelector((state: any) => state.products);

  const [show, setShow] = useState(false);

  useEffect(() => {
    !arrayIsEmpty(items) ? setShow(true) : setShow(false);
  }, [items]);

  const handleShow = (index: number) => {
    if(isNaturalNumber(index)){
      dispatch(updateProductShow(index));
    }
  }

  return (
    <Products className="Products">
      {show ? items.map((product: any) => (
        <Product className="Products-Product" key={checkIfUndefined(product?.key)} onClick={ () => handleShow(product.index)}>
          <ImageDiv className="Products-Product-Image">
            <Image className="Products-Product-Image-Img" src={checkIfUndefined(product?.image)}></Image>
          </ImageDiv>
          <Information className="Products-Product-Information">
            <Title className="Products-Product-Information-Title">
              <Text className="Products-Product-Information-Title-Text">
                {checkIfUndefined(product?.name)}
              </Text>
            </Title>
            <Description className="Products-Product-Information-Description">
              <Text className="Products-Product-Information-Description-Text">
                {checkIfUndefined(product?.description)}
              </Text>
            </Description>
            <Data className="Products-Product-Information-Data">
              <Price className="Products-Product-Information-Data-Price">
                <Label className="Products-Product-Information-Data-Price-Label">
                  Price: &#20;
                </Label>
                <Text className="Products-Product-Information-Data-Price-Text">
                  {checkIfUndefined(product?.price)} &#20;
                </Text>
              </Price>
              <Count className="Products-Product-Information-Data-Count">
                <Label className="Products-Product-Information-Data-Count-Label">
                  Count: &#20;
                </Label>
                <Text className="Products-Product-Information-Data-Count-Text">
                  {checkIfUndefined(product?.count)} &#20;
                </Text>
              </Count>
            </Data>
          </Information>
        </Product>
      )) : null}
    </Products>
  );
}

export default ProductsLayout;