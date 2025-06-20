/// CSS ///
import "../../../css/global/pre-sets.scss"
import "../../../css/global/classes.scss"
import "../../../css/Layouts/Product.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../data/redux/slices/restaurant/productsSlice.ts";
import { converteToMoney, toLink } from "../../../typescript/functions.ts";

import type { PropsPages } from "../../../typescript/props.ts";
import type { ProductType, StateType } from "../../../typescript/types.ts";
import {Contents } from "../../../typescript/content.ts";
import Warning from "../../templates/Warning.tsx";
import LayoutLayout from "../../templates/Layout.tsx";
import { Product, Scroll } from "../../components/components.tsx";
import ImageDiv from "../../templates/ImageDiv.tsx";
import Title from "../../templates/Title.tsx";
import KeyValue from "../../templates/KeyValue.tsx";
import Data from "../../components/Data.tsx";
import Paragraph from "../../templates/Paragraph.tsx";
import SubActions from "../../templates/SubActions.tsx";
import PageControllers from "../../templates/PageControllers.tsx";

const getSelectedProduct = (items: ProductType[]) : ProductType[] => items.filter((item: ProductType) => item.show);

const idTSX: string = "c";

const classNameLayoutDefault: string = "Detail";
const classNameBackgroundLayout: string = "bg-2";

const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;

const classNameNoItems: string = "NoItems";

const WarningProduct: FunctionComponent<any> = () => (<Warning id={idTSX} className={`${classNameTSX} ${classNameNoItems}`} message={"Nenhum Produto Selecionado!"}></Warning>);

const ProductLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;
  const idPage = props.idPage;

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

  const handleToGoBack = (e: any) : void => {
    const newObejct: ProductType = {
      ...product,
      show: false
    }
    dispatch(updateProduct(newObejct));
    toLink(e, navegationItems[(idPage - 1)].id);
    setNavegationSelected(navegationItems[(idPage - 1)]);
  };

  const handleAddInCart = (e: any) : void => {
    if(QTD + product.preSelected <= product.count && QTD > 0){
      const total: number = (product.preSelected + QTD) * product.price;
      const newObejct: ProductType = {
        ...product,
        preSelected: product.preSelected + QTD,
        total: total,
        itIsInCart: true,
        show: false
      }
      dispatch(updateProduct(newObejct));
      setNavegationSelected(navegationItems[(idPage + 1)]);
      toLink(e, navegationItems[(idPage + 1)].id);
    }
  };

  if(product == undefined){
    return (
      <WarningProduct></WarningProduct>
    );
  }

  return (
    <LayoutLayout id="c" className="Detail bg-2">
      <Product className="Product-Vertical">
        <Scroll className="Scroll">
          <ImageDiv className="Image" srcName={product.image}/>
          <Title className="Title" text={product.name}/>
          <SubActions className="SubActions"
            onClickSub = {handleSubQTD}
            display = {QTD}
            onClickAdd = {handleAddQTD}
            labelTotal = {
              <KeyValue 
                keyName={`${Contents.Labels.Total}: `}
                value={`${converteToMoney(totalLocal)} `}
              />
            }
          />
          <PageControllers className="PageControllers"
            onClickBack = {handleToGoBack}
            onClickNext = {handleAddInCart}
            buttonBack = {Contents.Buttons.Voltar}
            buttonNext = {Contents.Buttons.AddShoppingCart}
          />
          <Paragraph className="Paragraph" text={product.description}/>
          <Data className="Data">
            <KeyValue 
                keyName={`${Contents.Labels.Price}: `}
                value={`${converteToMoney(product.price)} `}
            />
          </Data>
        </Scroll>
      </Product>
    </LayoutLayout>
  );
}

export default ProductLayout;