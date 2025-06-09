/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/ShoppingCart.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Content, Data, Description, Display, Image, ImageDiv, Information, Label, Layout, Price, Product, Products, Resume, ShoppingCart, SubActions, Text, Title, Total } from "../components/components.tsx";
import { arrayIsEmpty, converteToMoney } from "../../typescript/functions.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import type { PropsPages } from "../../typescript/props.ts";
import { Contents } from "../../typescript/content.ts";
import LayoutLayout from "../components/Layout.tsx";

const getFilteredProducts = (products: ProductType[]) : ProductType[] => products.filter((product: ProductType) : boolean => product.itIsInCart);

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

  const indexNavegationItems: number = 2;

  const handComfirmation = () : void => {
      setNavegationSelected(navegationItems[indexNavegationItems + 1]);
  }

  const handleToGoBack = () : void => {
    setNavegationSelected(navegationItems[indexNavegationItems - 2]);
  };

  // if(selectedProducts.length == 0){
  //   return (<div>Nenhum Produto no Carrinho!</div>);
  // }

  return (
    <LayoutLayout id="d" className="Detail bg-3">
      <ShoppingCart className="ShoppingCart">
        {/* {!arrayIsEmpty(selectedProducts) ? (
          <>
            <Content className="Content">
              <Resume className="Resume">
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Labels.Items}: &#20;
                  </Label>
                  <Text className="Text">
                    {selectedProducts.length} &#20;
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Labels.Products}: &#20;
                  </Label>
                  <Text className="Text">
                    {selectedProducts.reduce((a: number, b: ProductType) => a + b.preSelected, 0)} &#20;
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Labels.Total}: &#20;
                  </Label>
                  <Text className="Text">
                    {converteToMoney(selectedProducts.reduce((a: number, b: ProductType) => a + b.total, 0))} &#20;
                  </Text>
                </Display>
              </Resume>
              <Actions className="Actions">
                <Action className="Action">
                  <button className="Button" onClick={handleToGoBack}>
                    {Contents.Buttons.Voltar}
                  </button>
                </Action>
                <Action className="Action">
                  <button className="Button" onClick={handComfirmation}>
                    {Contents.Buttons.CloseOrder}
                  </button>
                </Action>
              </Actions>
            </Content>
            <Products className="Products">
              {selectedProducts.map((product: ProductType) => (
                <Product className="Product-Horizontal" key={product.key}>
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
                          {converteToMoney(product.price)} &#20;
                        </Text>
                      </Price>
                    </Data>
                    <Actions className="Actions">
                      <SubActions className="SubActions">
                        <Action className="Action">
                          <button className="Button" onClick={ _ => handleSubQTDInCart(product)}>
                            <i className="Icon">
                              -
                            </i>
                          </button>
                        </Action>
                        <Display className="Display">
                          <Text className="Text">
                            {product.preSelected}
                          </Text>
                        </Display>
                        <Action className="Action">
                          <button className="Button" onClick={ _ => handleAddQTDInCart(product)}>
                            <i className="Icon">
                              +
                            </i>
                          </button>
                        </Action>
                        <Total className="Total">
                          <Text className="Text">
                            {converteToMoney(product.total)}
                          </Text>
                        </Total>
                        <Action className="Action">
                          <button className="Button" onClick={ _ => handleRemoveFromCart(product)}>
                            <i className="Icon">
                              X
                            </i>
                          </button>
                        </Action>
                      </SubActions>
                    </Actions>
                  </Information>
                </Product>
              ))}
            </Products>
          </>
        ) : null} */}
      </ShoppingCart>
    </LayoutLayout>
  );
}

export default ShoppingCartLayout