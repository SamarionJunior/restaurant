/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Product.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Content, Data, Description, Detail, Display, Image, ImageDiv, Information, Label, Layout, Overlay, Paragraph, Price, Product, Scroll, SubActions, Text, Title, Total } from "../components/components.tsx";
import { converteToMoney, toLink } from "../../typescript/functions.ts";

import { MdAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";
import type { PropsPages } from "../../typescript/props.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import {Contents } from "../../typescript/content.ts";
import LayoutLayout from "../components/Layout.tsx";

const getSelectedProduct = (items: ProductType[]) : ProductType[] => items.filter((item: ProductType) => item.show);

const ProductLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;

  const products : ProductType[] = useSelector((state: StateType) : ProductType[] =>  state.products);

  // console.log(products);

  const [selectedProduct, setSelectedProduct] = useState<ProductType[]>(getSelectedProduct(products));

  // console.log(selectedProduct);

  const [QTD, setQTD] = useState<number>(0);
  const [totalLocal, setTotalLocal] = useState<number>(0);
  const [product, setProduct] = useState<ProductType>(selectedProduct[0]);

  // console.log(product);

  const dispatch = useDispatch();

  useEffect(() : void => {
    if(products.length != 0){
      const aux: ProductType[] = getSelectedProduct(products);
      if(aux.length != 0){
        setSelectedProduct(aux);
      }
    }
  }, [products]);

  useEffect(() : void => {
    if(selectedProduct.length != 0){
      const aux: ProductType = selectedProduct[0];
      setProduct(aux);
    }
  }, [selectedProduct]);

  useEffect(() : void => {
    if(product != undefined){
      if(product.count > 0 && product.count > product.preSelected){
        setQTD(1);
      }else{
        setQTD(0);
      }
    }
    // console.log(product);
  }, [product]);

  useEffect(() : void => {
    if(product != null && product.price != null){
      setTotalLocal(product.price * QTD);
    }
  }, [QTD]);

  const handleAddQTD = () : void => setQTD((oldQTD: number) : number => product.preSelected + oldQTD + 1 > product.count ? oldQTD : oldQTD + 1);
  const handleSubQTD = () : void => setQTD((oldQTD: number) : number => oldQTD - 1 < 0 ? oldQTD : oldQTD - 1);
  
  const indexNavegationItems = 2;

  const handleToGoBack = (e: any) : void => {
    const newObejct: ProductType = {
      ...product,
      show: false
    }
    dispatch(updateProduct(newObejct));
    toLink(e, navegationItems[indexNavegationItems - 1].id);
    setNavegationSelected(navegationItems[indexNavegationItems - 1]);
  };

  const handleAddInCart = (e: any) : void => {
    if(QTD + product.preSelected <= product.count && QTD > 0){
      setNavegationSelected(navegationItems[indexNavegationItems + 1]);
      const total: number = (product.preSelected + QTD) * product.price;
      const newObejct: ProductType = {
        ...product,
        preSelected: product.preSelected + QTD,
        total: total,
        itIsInCart: true,
        show: false
      }
      toLink(e, navegationItems[indexNavegationItems + 1].id);
      dispatch(updateProduct(newObejct));
    }
  };

  if(product == undefined){
    return (
      <LayoutLayout id="c" className="Detail bg-2">
        <div>Nenhum Produto Selecionado!</div>
      </LayoutLayout>
    );
  }

  return (
    <LayoutLayout id="c" className="Detail bg-2">
      <Product className="Product-Vertical">
        <Scroll className="Scroll">
          <ImageDiv className="Image">
            <Image className="Img" src={product.image}/>
          </ImageDiv>
          <Title className="Title">
            <Text className="Text">
              {product.name}
            </Text>
          </Title>
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
        </Scroll>
      </Product>
    </LayoutLayout>
  );
}

export default ProductLayout;