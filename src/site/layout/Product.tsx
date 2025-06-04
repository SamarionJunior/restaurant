/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Product.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Data, Description, Detail, Display, Image, ImageDiv, Information, Label, Overlay, Paragraph, Price, Product, Scroll, SubActions, Text, Title, Total } from "../components/components.tsx";
import { converteToMoney } from "../../typescript/functions.ts";

import { MdAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";
import type { PropsPages } from "../../typescript/props.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import {Contents } from "../../typescript/content.ts";

const getSelectedProduct = <T,>(items: T[] | any) : T[] | any => items.filter((item: T | any) => item.show);
// products.filter((product: ProductType) => product.show)

const ProductLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;

  const products : ProductType[] = useSelector((state: StateType) : ProductType[] =>  state.products);
  const [selectedProduct, setSelectedProduct] = useState<ProductType[]>(getSelectedProduct(products));

  const [QTD, setQTD] = useState<number>(0);
  const [totalLocal, setTotalLocal] = useState<number>(0);
  const [product, setProduct] = useState<ProductType>(selectedProduct[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(selectedProduct.length == 1){
      setSelectedProduct(getSelectedProduct(products));
    }
  }, [products]);

  useEffect(() => {
    if(selectedProduct.length == 1){
      setProduct(selectedProduct[0]);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if(selectedProduct.length == 1){
      setTotalLocal(product.price * QTD);
    }
  }, [QTD]);

  useEffect(() => {
    if(selectedProduct.length == 1){
      if(product.count > 0 && product.count > product.preSelected){
        setQTD(1);
      }else{
        setQTD(0);
      }
    }
  }, [product]);

  const handleAddQTD = () : void => setQTD((oldQTD: number) => product.preSelected + oldQTD + 1 > product.count ? oldQTD : oldQTD + 1);
  const handleSubQTD = () : void => setQTD((oldQTD: number) => oldQTD - 1 < 0 ? oldQTD : oldQTD - 1);
  
  const indexNavegationItems = 1;

  const handleAddInCart = () : void => {
    if(QTD + product.preSelected <= product.count && QTD > 0){
      setNavegationSelected(navegationItems[indexNavegationItems + 1]);
      const total = (product.preSelected + QTD) * product.price;
      const newObejct: ProductType = {
        ...product,
        preSelected: product.preSelected + QTD,
        total: total,
        itIsInCart: true,
        show: false
      }
      dispatch(updateProduct(newObejct));
    }
  };

  const handleToGoBack = () : void => {
    setNavegationSelected(navegationItems[indexNavegationItems - 1]);
    const newObejct: ProductType = {
      ...product,
      show: false
    }
    dispatch(updateProduct(newObejct));
  };

  if(selectedProduct.length != 1){
    return (<div>Nenhum Produto Selecionado!</div>);
  }

  return (
    <Detail className="Detail">
      <Overlay className="Overlay">
        <Product className="Product-Vertical">
          <Scroll className="Scroll">
            <ImageDiv className="Image">
              <Image className="Img" src={product.image}/>
            </ImageDiv>
            <Information className="Information">
              <Title className="Title">
                <Text className="Text">
                  {product.name}
                </Text>
              </Title>
              <Description className="Description">
                <Paragraph className="Paragraph">
                  {product.description}
                </Paragraph>
              </Description>
              <Data className="Data">
                <Price className="Price">
                  <Label className="Label">
                    {Contents.Labels.Price}: &#20;
                  </Label>
                  <Text className="Text">
                    {converteToMoney(product.price)} &#20;
                  </Text>
                </Price>
              </Data>
            </Information>
          </Scroll>
          <Actions className="Actions">
            <SubActions className="SubActions">
              <Action className="Action">
                <button className="Button" onClick={handleSubQTD}>
                  <GrFormSubtract className="Icon"/>
                </button>
              </Action>
              <Display className="Display">
                <Text className="Text">
                  {QTD}
                </Text>
              </Display>
              <Action className="Action">
                <button className="Button" onClick={handleAddQTD}>
                  <MdAdd className="Icon"/>
                </button>
              </Action>
              <Total className="Total">
                <Label className="Label">
                  {Contents.Labels.Total}: &#20;
                </Label>
                <Text className="Text">
                  {converteToMoney(totalLocal)} &#20;
                </Text>
              </Total>
            </SubActions>
            <Action className="Action">
              <button className="Button" onClick={handleToGoBack}>
                {Contents.Buttons.Voltar}
              </button>
              <button className="Button" onClick={handleAddInCart}>
                {Contents.Buttons.AddShoppingCart}
              </button>
            </Action>
          </Actions>
        </Product>
      </Overlay>
    </Detail>
  );
}

export default ProductLayout;

{/* <SubActions className="Product-Actions-SubActions">
  <Action className="Product-Actions-SubActions-Action">
    <button className="Product-Actions-SubActions-Action-Button" onClick={handleSubQTD}>
      -
    </button>
  </Action>
  <Display className="Product-Actions-SubActions-Display">
    <input type="text" className="Input-Default" value={QTD} />
    <Text className="Product-Actions-SubActions-Display-Text">
      {QTD}
    </Text>
  </Display>
  <Action className="Product-Actions-SubActions-Action">
    <button className="Product-Actions-SubActions-Action-Button" onClick={handleAddQTD}>
      <div className="Text-Button">
        +
      </div>
    </button>
  </Action>
</SubActions> */}