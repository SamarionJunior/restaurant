/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/global/classes.scss"
import "../../css/Layouts/ShoppingCart.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Container, Display, Group, Image, Information, Label, Price, Product, Products, Resume, Text, Total } from "../components/components.tsx";
import { arrayIsEmpty, converteToMoney, toLink } from "../../typescript/functions.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import type { PropsPages } from "../../typescript/props.ts";
import { Contents } from "../../typescript/content.ts";
import Warning from "../templates/Warning.tsx";
import LayoutLayout from "../templates/Layout.tsx";
import ImageDiv from "../templates/ImageDiv.tsx";
import Title from "../templates/Title.tsx";
import Description from "../templates/Description.tsx";
import ProductHorizontal from "../templates/ProductHorizontal.tsx";
import Data from "../components/Data.tsx";
import KeyValue from "../templates/KeyValue.tsx";
import PageControllers from "../templates/PageControllers.tsx";
import SubActions from "../templates/SubActions.tsx";

const getFilteredProducts = (products: ProductType[]) : ProductType[] => products.filter((product: ProductType) : boolean => product.itIsInCart);

const idTSX: string = "d";

const classNameLayoutDefault: string = "ShoppingCart";
const classNameBackgroundLayout: string = "bg-3";

const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;

const classNameNoItems: string = "NoItems";

const WarningShoppingCart: FunctionComponent<any> = () => (<Warning id={idTSX} className={`${classNameTSX} ${classNameNoItems}`} message={"Nenhum Produto no Carrinho!"}></Warning>);

const ShoppingCartLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;

  const products: ProductType[] = useSelector((state: StateType) : ProductType[] => state.products);

  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>(getFilteredProducts(products));

  const dispatch = useDispatch();

  useEffect(() : void => {
    setSelectedProducts(getFilteredProducts(products));
  }, [products]);

  const handleAddQTDInCart = (product: ProductType) : void => {
    const newPreSelected: number = product.preSelected + 1 <= product.count ? product.preSelected + 1 : product.count;
    const newTotal: number = newPreSelected * product.price;
    const newObejct: ProductType = {
      ...product,
      preSelected: newPreSelected,
      total: newTotal
    };
    dispatch(updateProduct(newObejct));
  }

  const handleSubQTDInCart = (product: ProductType) : void => {
    const newPreSelected: number = product.preSelected - 1 > 0 ? product.preSelected - 1 : 0;
    const newTotal: number = newPreSelected * product.price;
    const newItIsInCart: boolean = newPreSelected == 0 ? false : true;
    const newObejct: ProductType = {
      ...product,
      preSelected: newPreSelected,
      total: newTotal,
      itIsInCart: newItIsInCart
    };
    dispatch(updateProduct(newObejct));
  }

  const handleRemoveFromCart = (product: ProductType) : void => {
      dispatch(updateProduct({
      ...product,
      preSelected: 0,
      total: 0,
      itIsInCart: false
    }))
  };

  const indexNavegationItems: number = 3;

  const handleToGoBack = (e: any) : void => {
    setNavegationSelected(navegationItems[indexNavegationItems - 2]);
    toLink(e, navegationItems[indexNavegationItems - 2].id);
  };

  const handComfirmation = (e: any) : void => {
    setNavegationSelected(navegationItems[indexNavegationItems + 1]);
    toLink(e, navegationItems[indexNavegationItems + 1].id);
  }

  if(selectedProducts.length == 0){
    return (
      <WarningShoppingCart></WarningShoppingCart>
    );
  }

  return (
    <LayoutLayout id="d" className="ShoppingCart bg-3">
        {!arrayIsEmpty(selectedProducts) ? (
          <>
            <Data className="Data">
              <KeyValue 
              keyName={`${Contents.Labels.Items}: `}
              value={`${selectedProducts.length} `}
              />
              <KeyValue 
              keyName={`${Contents.Labels.Products}: `}
              value={`${selectedProducts.reduce((a: number, b: ProductType) => a + b.preSelected, 0)} `}
              />
              <KeyValue 
              keyName={`${Contents.Labels.Total}: `}
              value={`${converteToMoney(selectedProducts.reduce((a: number, b: ProductType) => a + b.total, 0))} `}
              />
            </Data>
            <PageControllers className="PageControllers"
              onClickBack = {handleToGoBack}
              onClickNext = {handComfirmation}
              buttonBack = {Contents.Buttons.Voltar}
              buttonNext = {Contents.Buttons.CloseOrder}
            />
            <Products className="Products">
              {selectedProducts.map((product: ProductType) => (
                <ProductHorizontal
                  key={product.key}

                  className="Product-Horizontal"
                  product={product}
                  onClick={(e: any) => {return}}

                  Data={
                    <Data className="Data">
                      <KeyValue 
                      keyName={`${Contents.Labels.Price}: `}
                      value={`${converteToMoney(product.price)} `}
                      />
                      <KeyValue 
                      keyName={`${Contents.Labels.Total}: `}
                      value={`${converteToMoney(product.total)} `}
                      />
                    </Data>
                  }
                  SubActions={
                    <SubActions className="SubActions"
                      onClickSub = { () => handleSubQTDInCart(product)}
                      display = {product.preSelected}
                      onClickAdd = { () => handleAddQTDInCart(product)}

                      buttonRemove = {
                        <Action className="Action">
                          <button className="Button" onClick={ _ => handleRemoveFromCart(product)}>
                            <i className="Icon">
                              X
                            </i>
                          </button>
                        </Action>
                      }
                    />
                  }
                />
              ))}
            </Products>
          </>
        ) : null}
    </LayoutLayout>
  );
}

export default ShoppingCartLayout

// <Product className="Product-Horizontal" key={product.key}>
//   <ImageDiv className="Image" srcName={product.image}/>
//   <Information className="Information">
//     <Title className="Title" text={product.name}/>
//     <Description className="Description" text={product.description}/>
//     <Data className="Data">
//       <Price className="Price">
//         <Label className="Label">
//           {Contents.Labels.Price}: &#20;
//         </Label>
//         <Text className="Text">
//           {converteToMoney(product.price)} &#20;
//         </Text>
//       </Price>
//       <Total className="Total">
//         <Label className="Label">
//           {Contents.Labels.Total}: &#20;
//         </Label>
//         <Text className="Text">
//           {converteToMoney(product.total)}
//         </Text>
//       </Total>
//     </Data>
//   </Information>
// </Product>