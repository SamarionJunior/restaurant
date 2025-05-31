/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/components/ShoppingCart.scss"

/// IMAGE ///

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Content, Data, Description, Display, Image, ImageDiv, Information, Label, Price, Product, Products, Resume, ShoppingCart, SubActions, Text, Title, Total } from "../components/components.tsx";
import { arrayIsEmpty, checkIfUndefined, converteToMoney } from "../../typescript/functions.ts";
import type { ProductType } from "../../typescript/types.ts";
import type { PropsPages } from "../../typescript/props.ts";

const ShoppingCartLayout: FunctionComponent<any> = (props: PropsPages) => {

  const [selectedProduct, setSelectedProduct] = useState([]);

  const products = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if(products != null){
      setSelectedProduct(products.filter((product: any) => product.itIsInCart));
    }
  }, [products]);

  const handleAddQTDInCart = (product: any) => {
    const newPreSelected = product.preSelected + 1 <= product.count ? product.preSelected + 1 : product.count;
    const newTotal = newPreSelected * product.price;
    const newObejct = {
      ...product,
      preSelected: newPreSelected,
      total: newTotal
    };
    dispatch(updateProduct(newObejct));
  }

  const handleSubQTDInCart = (product: any) => {
    const newPreSelected = product.preSelected - 1 > 0 ? product.preSelected - 1 : 0;
    const newTotal = newPreSelected * product.price;
    const newItIsInCart = newPreSelected == 0 ? false : true;
    const newObejct = {
      ...product,
      preSelected: newPreSelected,
      total: newTotal,
      itIsInCart: newItIsInCart
    };
    dispatch(updateProduct(newObejct));
  }

  const handleRemoveFromCart = (product: any) => dispatch(updateProduct({
    ...product,
    preSelected: 0,
    total: 0,
    itIsInCart: false
  }));

  const handComfirmation = () => {
    props.setNavegationSelected(props.navegationItems[3]);
  }

  return (
    <ShoppingCart className="ShoppingCart">
      {!arrayIsEmpty(selectedProduct) ? (
        <>
          <Products className="Products">
            {selectedProduct.map((product: ProductType) => (
              <Product className="Product-Horizontal" key={checkIfUndefined(product?.key)}>
                {console.log(product?.key)}
                <ImageDiv className="Image">
                  <Image className="Img" src={checkIfUndefined(product?.image)}/>
                </ImageDiv>
                <Information className="Information">
                  <Title className="Title">
                    <Text className="Text">
                      {checkIfUndefined(product?.name)}
                    </Text>
                  </Title>
                  <Description className="Description">
                    <Text className="Text">
                      {checkIfUndefined(product?.description)}
                    </Text>
                  </Description>
                  <Data className="Data">
                    <Price className="Price">
                      <Label className="Label">
                        Price: &#20;
                      </Label>
                      <Text className="Text">
                        {converteToMoney(checkIfUndefined(product?.price))} &#20;
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
                        <Label className="Label">
                          Total: &#20;
                        </Label>
                        <Text className="Text">
                          {converteToMoney(checkIfUndefined(product?.total))} &#20;
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
          {/* <Content className="Content">
            <Resume className="Resume">
              <Display className="Display">
                <Text className="Text">
                  {"Itens: " + selectedProduct.length} &#20;
                </Text>
              </Display>
              <Display className="Display">
                <Text className="Text">
                  {"Tipos: " + selectedProduct.reduce((a: any, b: any) => a + b.preSelected, 0)} &#20;
                </Text>
              </Display>
              <Display className="Display">
                <Text className="Text">
                  {"Preço Total: " + converteToMoney(selectedProduct.reduce((a: any, b: any) => a + b.total, 0))} &#20;
                </Text>
              </Display>
            </Resume>
            <Actions className="Actions">
              <Action className="Action">
                <button className="Button">
                  Voltar
                </button>
              </Action>
              <Action className="Action">
                <button className="Button" onClick={handComfirmation}>
                  Confimar
                </button>
              </Action>
            </Actions>
          </Content> */}
        </>
      ) : null}
    </ShoppingCart>
  );
}

export default ShoppingCartLayout