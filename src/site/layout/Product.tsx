/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/components/Product.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { Action, Actions, Data, Description, Display, Image, ImageDiv, Information, Label, Paragraph, Price, Product, SubActions, Text, Title } from "../components/components.tsx";
import { checkIfUndefined } from "../../typescript/functions.ts";

const ProductLayout: FunctionComponent<any> = _ => {

  const [QTD, setQTD] = useState(0);
  // const [totalLocal, setTotalLocal] = useState(0);
  const [, setTotalLocal] = useState(0);
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
        itIsInCart: true
      }
      dispatch(updateProduct(newObejct));
    }
  };

  return (
    <Product className="Product">
      {product != null ? (
        <>
          <ImageDiv className="Product-Image">
            <Image className="Product-Image-Img" src={checkIfUndefined(product?.image)}></Image>
          </ImageDiv>
          <Information className="Product-Information">
            <Title className="Product-Information-Title">
              <Text className="Product-Information-Title-Text">
                {checkIfUndefined(product?.name)}
              </Text>
            </Title>
            <Description className="Product-Information-Description">
              <Paragraph className="Product-Information-Description-Paragraph">
                {checkIfUndefined(product?.description)}
              </Paragraph>
            </Description>
            <Data className="Product-Information-Data">
              <Price className="Product-Information-Data-Price">
                <Label className="Product-Information-Data-Price-Label">
                  Price: &#20;
                </Label>
                <Text className="Product-Information-Data-Price-Text">
                  {checkIfUndefined(product?.price)} &#20;
                </Text>
              </Price>
            </Data>
          </Information>
          <Actions className="Product-Actions">
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
              <Total className="Flex WH-Auto Product-Actions-SubActions-Total">
                <Label className="Flex WH-Auto Product-Actions-SubActions-Total-Label">
                  Total: &#20;
                </Label>
                <Text className="Flex WH-Auto Product-Actions-SubActions-Total-Text">
                  {totalLocal} &#20;
                </Text>
              </Total>
            </SubActions> */}
            <SubActions className="SubActions">
              <Action className="Action">
                <button className="Button Border-Half-Circle-Left" onClick={handleSubQTD}>
                  <i className="Icon">
                    -
                  </i>
                </button>
              </Action>
              <Display className="Display">
                <Text className="Text">
                  {QTD}
                </Text>
              </Display>
              <Action className="Action">
                <button className="Button" onClick={handleAddQTD}>
                  <i className="Icon">
                    +
                  </i>
                </button>
              </Action>
            </SubActions>
            <Action className="Product-Actions-Action">
              <button className="Product-Actions-Action-Button" onClick={handleAddInCart}>
                adicionar ao carrinho
              </button>
            </Action>
          </Actions>
        </>
      ) : null }
    </Product>
  );
}

export default ProductLayout;