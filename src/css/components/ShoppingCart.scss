/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/restaurant.scss"

/// IMAGE ///

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Content, Data, Description, Display, Image, ImageDiv, Information, Label, Price, Product, Products, Resume, ShoppingCart, Text, Title, Total } from "../components/components.tsx";
import { arrayIsEmpty, checkIfUndefined } from "../../typescript/functions.ts";

const ShoppingCartLayout: FunctionComponent<any> = _ => {

  const [selectedProduct, setSelectedProduct] = useState([]);

  // const [title, setTitle] = useState("Cart");
  const [title, ] = useState("Cart");

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

  return (
    <ShoppingCart className="Flex WH-Default Bottom-Space-Children Padding-Vertical Collumn ShoppingCart">
      <Title className="Flex WH-Default ShoppingCart-Title">
        <Text className="Flex WH-Default ShoppingCart-Title-Text">
          {title}
        </Text>
      </Title>
      {!arrayIsEmpty(selectedProduct) ? (
        <>
          <Products className="Flex WH-Default Collumn ShoppingCart-Products">
            {selectedProduct.map((product: any) => (
              <Product className="Flex Right-Space-Children WH-Default ShoppingCart-Products-Product" key={checkIfUndefined(product?.key)}>
                <ImageDiv className="Flex Image-Size Flex-Center ShoppingCart-Products-Product-Image">
                  <Image className="Flex Image-Size Flex-Center ShoppingCart-Products-Product-Image-Img" src={checkIfUndefined(product?.image)}/>
                </ImageDiv>
                <Information className="Flex Collumn Collumn ShoppingCart-Products-Product-Information">
                  <Title className="Flex WH-Default ShoppingCart-Products-Product-Information-Title">
                    <Text className="Flex WH-Default ShoppingCart-Products-Product-Information-Title-Text">
                      {checkIfUndefined(product?.name)}
                    </Text>
                  </Title>
                  <Description className="Flex WH-Default Collumn ShoppingCart-Products-Product-Information-Description">
                    <Text className="Flex Ellipse ShoppingCart-Products-Product-Information-Description-Paragraph">
                      {checkIfUndefined(product?.description)}
                    </Text>
                  </Description>
                  <Data className="Flex WH-Default ShoppingCart-Products-Product-Information-Data">
                    <Price className="Flex WH-Auto ShoppingCart-Products-Product-Information-Data-Price">
                      <Label className="Flex WH-Auto ShoppingCart-Products-Product-Information-Data-Price-Label">
                        Price: &#20;
                      </Label>
                      <Text className="Flex WH-Auto ShoppingCart-Products-Product-Information-Data-Price-Text">
                        {checkIfUndefined(product?.price)} &#20;
                      </Text>
                    </Price>
                    <Total className="Flex WH-Auto ShoppingCart-Products-Product-Information-Data-Total">
                      <Label className="Flex WH-Auto ShoppingCart-Products-Product-Information-Data-Total-Label">
                        Total: &#20;
                      </Label>
                      <Text className="Flex WH-Auto ShoppingCart-Products-Product-Information-Data-Total-Text">
                        {checkIfUndefined(product?.total)} &#20;
                      </Text>
                    </Total>
                    <Actions className="Flex WH-Auto Grow Row-End ShoppingCart-Products-Product-Actions">
                      <Action className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Action">
                        <button className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Action-Button" onClick={ _ => handleAddQTDInCart(product)}>
                          +
                        </button>
                      </Action>
                      <Display className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Display">
                        <Text className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Display-Text">
                          {product.preSelected}
                        </Text>
                      </Display>
                      <Action className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Action">
                        <button className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Action-Button" onClick={ _ => handleSubQTDInCart(product)}>
                          -
                        </button>
                      </Action>
                      <Action className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Action">
                        <button className="Flex WH-Auto ShoppingCart-Products-Product-Actions-Action-Button" onClick={ _ => handleRemoveFromCart(product)}>
                          X
                        </button>
                      </Action>
                    </Actions>
                  </Data>
                </Information>
              </Product>
            ))}
          </Products>
          <Content className="Flex WH-Default Bottom-Space-Children Collumn ShoppingCart-Content">
            <Resume className="Flex WH-Default ShoppingCart-Content-Resume">
              <Display className="Flex WH-Auto ShoppingCart-Content-Resume-Display">
                <Text className="Flex WH-Auto ShoppingCart-Content-Resume-Display-Text">
                  {"Itens: " + selectedProduct.length} &#20;
                </Text>
              </Display>
              <Display className="Flex WH-Auto ShoppingCart-Content-Resume-Display">
                <Text className="Flex WH-Auto ShoppingCart-Content-Resume-Display-Text">
                  {"Número: " + selectedProduct.reduce((a: any, b: any) => a + b.preSelected, 0)} &#20;
                </Text>
              </Display>
              <Display className="Flex WH-Auto ShoppingCart-Content-Resume-Display">
                <Text className="Flex WH-Auto ShoppingCart-Content-Resume-Display-Text">
                  {"Preço Total: " + selectedProduct.reduce((a: any, b: any) => a + b.total, 0)} &#20;
                </Text>
              </Display>
            </Resume>
            <Actions className="Flex Right-Space-Children WH-Default ShoppingCart-Content-Actions">
              <Action className="Flex Flex-Center ShoppingCart-Content-Actions-Action">
                <button className="Flex Flex-Center WH-Default ShoppingCartart-Content-Actions-Action-Button">
                  Voltar
                </button>
              </Action>
              <Action className="Flex Flex-Center ShoppingCart-Content-Actions-Action">
                <button className="Flex Flex-Center WH-Default ShoppingCart-Content-Actions-Action-Button">
                  Confimar
                </button>
              </Action>
            </Actions>
          </Content>
        </>
      ) : null}
    </ShoppingCart>
  );
}

export default ShoppingCartLayout