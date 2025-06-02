/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/components/Product.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Data, Description, Detail, Display, Image, ImageDiv, Information, Label, Overlay, Paragraph, Price, Product, Scroll, SubActions, Text, Title, Total } from "../components/components.tsx";
import { checkIfUndefined, converteToMoney } from "../../typescript/functions.ts";

import { MdAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";
import type { PropsPages } from "../../typescript/props.ts";

const ProductLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props?.setNavegationSelected;
  const navegationItems = props?.navegationItems;

  const [QTD, setQTD] = useState(0);
  const [totalLocal, setTotalLocal] = useState(0);
  const [product, setProduct] = useState<any>(null);
  // const [title, setTitle] = useState("Information");

  const products = useSelector((state: any) => state.products);
  const selectedProduct = products.filter((product: any) => product.show);

  const dispatch = useDispatch();

  useEffect(() => {
    if(selectedProduct.length == 1){
      setProduct(selectedProduct[0]);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if(product != null && product?.price != undefined){
      setTotalLocal(product?.price * QTD);
    }
  }, [QTD]);

  useEffect(() => {
    if(product != null && product?.preSelected != undefined){
      if(product.count > 0 && product.count > product.preSelected){
        setQTD(1);
      }else{
        setQTD(0);
      }
    }
  }, [product]);

  const handleAddQTD = () => setQTD(oldQTD => product.preSelected + oldQTD + 1 > product.count ? oldQTD : oldQTD + 1);
  const handleSubQTD = () => setQTD(oldQTD => oldQTD - 1 < 0 ? oldQTD : oldQTD - 1);

  const handleAddInCart = () => {
    if(QTD + product.preSelected <= product.count && QTD > 0){
      const total = (product.preSelected + QTD) * product.price;
      const newObejct = {
        ...product,
        preSelected: product.preSelected + QTD,
        total: total,
        itIsInCart: true,
        show: false
      }
      dispatch(updateProduct(newObejct));
      if(setNavegationSelected != null && setNavegationSelected != undefined && navegationItems != null && navegationItems != undefined){
        setNavegationSelected(navegationItems[2]);
      }
    }
  };

  return (
    <Detail className="Detail">
      <Overlay className="Overlay">
        <Product className="Product-Vertical">
          {product != null ? (
            <>
              <Scroll className="Scroll">
                <ImageDiv className="Image">
                  <Image className="Img" src={checkIfUndefined(product?.image)}></Image>
                </ImageDiv>
                <Information className="Information">
                  <Title className="Title">
                    <Text className="Text">
                      {checkIfUndefined(product?.name)}
                    </Text>
                  </Title>
                  <Description className="Description">
                    <Paragraph className="Paragraph">
                      {checkIfUndefined(product?.description)}
                    </Paragraph>
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
                      Total: &#20;
                    </Label>
                    <Text className="Text">
                      {converteToMoney(totalLocal)} &#20;
                    </Text>
                  </Total>
                </SubActions>
                <Action className="Action">
                  <button className="Button" onClick={handleAddInCart}>
                    adicionar ao carrinho
                  </button>
                </Action>
              </Actions>
            </>
          ) : null }
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