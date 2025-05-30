/// CSS ///
import "../../css/pre-sets.scss"
import "../../css/components/Products.scss"
/// IMAGE ///
import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductShow } from "../../data/redux/slices/restaurant/productsSlice.ts";
/// TYPESCRIPT ///
import { arrayIsEmpty, checkIfUndefined, isNaturalNumber } from "../../typescript/functions.ts";
import { Count, Data, Description, Image, ImageDiv, Information, Label, Price, Product, Products, Store, Text, Title } from "../components/components.tsx";

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
    <Store className="Store">
      <Products className="Products">
        {show ? items.map((product: any) => (
          <Product className="Product-Horizontal" key={checkIfUndefined(product?.key)} onClick={ () => handleShow(product?.index)}>
            <ImageDiv className="Image">
              <Image className="Img" src={checkIfUndefined(product?.image)}></Image>
            </ImageDiv>
            <Information className="Information">
              <Title className="Title">
                <Text className="Title-Text">
                  {checkIfUndefined(product?.name)}
                </Text>
              </Title>
              <Description className="Description">
                <Text className="Description-Text">
                  {checkIfUndefined(product?.description)}
                </Text>
              </Description>
              <Data className="Data">
                <Price className="Price">
                  <Label className="Price-Label">
                    Price: &#20;
                  </Label>
                  <Text className="Price-Text">
                    {checkIfUndefined(product?.price)} &#20;
                  </Text>
                </Price>
                <Count className="Count">
                  <Label className="Count-Label">
                    Count: &#20;
                  </Label>
                  <Text className="Count-Text">
                    {checkIfUndefined(product?.count)} &#20;
                  </Text>
                </Count>
              </Data>
            </Information>
          </Product>
        )) : null}
      </Products>
      {/* <div className="Space"></div> */}
    </Store>
  );
}

export default ProductsLayout;