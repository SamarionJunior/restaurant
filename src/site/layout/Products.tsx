/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Products.scss"
import "../../css/Layouts/Layout.scss"
/// IMAGE ///
import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductShow } from "../../data/redux/slices/restaurant/productsSlice.ts";
/// TYPESCRIPT ///
import { arrayIsEmpty } from "../../typescript/functions.ts";
import { Content, Count, Data, Description, Image, ImageDiv, Information, Label, Layout, Price, Product, Products, Store, Text, Title } from "../components/components.tsx";
import type { PropsPages } from "../../typescript/props.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import { Contents } from "../../typescript/content.ts";
import LayoutLayout from "../components/Layout.tsx";

const toFilterByGreaterThan = <T,>(items: T[] | any[], proprity: string, value: number) : T[] | any[] => items.filter((item: T | any) : boolean => item[proprity] > value);
const getAvailableProducts = (products: ProductType[]) : ProductType[] => toFilterByGreaterThan<ProductType>(products, "count", 0);

// (item: ProductType) : boolean => item.count > 0)

const ProductsLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;

  const dispatch = useDispatch();

  const products: ProductType[] = useSelector((state: StateType) : ProductType[] =>  state.products);
  
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>(getAvailableProducts(products));

  const [show, setShow] = useState<boolean>(false);

  useEffect(() : void => {
    !arrayIsEmpty(products) ? setShow(true) : setShow(false);
    setProductsFiltered(getAvailableProducts(products));
  }, [products]);

  const handleShow = (index: number) : void => {
    if(index >= 0){
      dispatch(updateProductShow(index));
      setNavegationSelected(navegationItems[1]);
    }
  }

  if(productsFiltered.length == 0){
    return (
      <LayoutLayout id="b" className="Store bg-1">
        <div>Nenhum Produto no Cardápio!</div>
      </LayoutLayout>
    );
  }

  return (
    <LayoutLayout id="b" className="Store bg-1">
        {show ? productsFiltered.map((product: ProductType) => (
          <Product className="Product-Horizontal" key={product.key} onClick={ () => handleShow(product.index)}>
            <ImageDiv className="Image">
              <Image className="Img" src={product.image}></Image>
            </ImageDiv>
            <Information className="Information">
              <Title className="Title">
                <Text className="Text">
                  {product.name}
                </Text>
              </Title>
              <Description className="Description">
                <Text className="Text">
                  {product.description}
                </Text>
              </Description>
              <Data className="Data">
                <Price className="Price">
                  <Label className="Label">
                    {Contents.Labels.Price}: &#20;
                  </Label>
                  <Text className="Text">
                    {product.price} &#20;
                  </Text>
                </Price>
                <Count className="Count">
                  <Label className="Label">
                    {Contents.Labels.Count}: &#20;
                  </Label>
                  <Text className="Text">
                    {product.count} &#20;
                  </Text>
                </Count>
              </Data>
            </Information>
          </Product>
        )) : null}
    </LayoutLayout>
  );
}

export default ProductsLayout;