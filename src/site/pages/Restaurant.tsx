/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/restaurant.scss"

/// IMAGE ///

import hambuguerImage from "../../assets/hambuguer.png";
import hotdogImage from "../../assets/hotdog.png";
import pizzaImage from "../../assets/pizza.png";

import waitingImage from "../../assets/waiting.png";
import cookingImage from "../../assets/cooking.png";
import deliveryImage from "../../assets/delivery.png";
import confirmImage from "../../assets/confirm.png";

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, updateProducts, updateProductShow } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { addOrder } from "../../data/redux/slices/restaurant/ordersSlice.ts";

const Image: FunctionComponent<any> = props => {
  return (
      <img className={props.className} src={props.src} width="50rem" height="50rem" alt="" />
  );
}
const ImageDiv: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Paragraph: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Label: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Text: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Description: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Price: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Information: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Product: FunctionComponent<any> = props => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
const Products: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Title: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Actions: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const SubActions: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Action: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Display: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Total: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Form: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const SubForm: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Count: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const History: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const DateAndHour: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const NavegationItem: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Painel: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Navegation: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Order: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const ShoppingCart: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Confirmation: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Status: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Data: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Resume: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
const Content: FunctionComponent<any> = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

const NavegationTemplate: FunctionComponent<any> = _ => {

  const [items, setItems] = useState(NavegationItems);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setItems(NavegationItems);
  }, [NavegationItems]);

  useEffect(() => {
    if(items != undefined && items != null && items.length > 0 ){
      setShow(true);
    }else{
      setShow(false);
    }
  }, [items]);

  return (
    <Navegation className={""}>
      {show ? items?.map((item: any) => (
        <NavegationItem className="navegation-item" key={item}>
          <Text className="navegation-item-text">
            {item}
          </Text>
        </NavegationItem>
      )) : null}
    </Navegation>
  );
}
const ProductsTemplate: FunctionComponent<any> = _ => {

  const dispatch = useDispatch();

  const items = useSelector((state: any) => state.products);

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Menu");

  useEffect(() => {
    if(!arrayIsEmpty(items)){
      setShow(true);
    }else{
      setShow(false);
    }
  }, [items]);

  const handleShow = (index: any) => {
    if(index != null && index != undefined && index >= 0){
      dispatch(updateProductShow(index));
    }
  }

  return (
    <Products className="Flex Bottom-Space-Children Padding-Vertical Collumn Products">
      {/* <Title className="Flex WH-Default Products-Title">
        <Text className="Flex WH-Default Products-Title-Text">
          {title}
        </Text>
      </Title> */}
      {show ? items.map((product: any) => (
        <Product className="Flex Right-Space-Children WH-Default Products-Product" key={checkIfUndefined(product?.key)} onClick={ () => handleShow(product.index)}>
          <ImageDiv className="Flex Image-Size Flex-Center Products-Product-Image">
            <Image className="Flex Image-Size Flex-Center Products-Product-Image-Img" src={checkIfUndefined(product?.image)}></Image>
          </ImageDiv>
          <Information className="Flex WH-Default Collumn Products-Product-Information">
            <Title className="Flex WH-Default Products-Product-Information-Title">
              <Text className="Flex WH-Default Name-Size Products-Product-Information-Title-Text">
                {checkIfUndefined(product?.name)}
              </Text>
            </Title>
            <Description className="Flex WH-Default Products-Product-Information-Description">
              <Text className="Ellipse Products-Product-Information-Description-Text">
                {checkIfUndefined(product?.description)}
              </Text>
            </Description>
            <Data className="Flex WH-Default Data-Size Products-Product-Information-Data">
              <Price className="Flex WH-Auto Products-Product-Information-Data-Price">
                <Label className="Flex WH-Auto Products-Product-Information-Data-Price-Label">
                  Price: &#20;
                </Label>
                <Text className="Flex WH-Auto Products-Product-Information-Data-Price-Text">
                  {checkIfUndefined(product?.price)} &#20;
                </Text>
              </Price>
              <Count className="Flex WH-Auto Products-Product-Information-Data-Count">
                <Label className="Flex WH-Auto Products-Product-Information-Data-Count-Label">
                  Count: &#20;
                </Label>
                <Text className="Flex WH-Auto Products-Product-Information-Data-Count-Text">
                  {checkIfUndefined(product?.count)} &#20;
                </Text>
              </Count>
            </Data>
          </Information>
        </Product>
      )) : null}
    </Products>
  );
}
const ProductTemplate: FunctionComponent<any> = _ => {

  const [QTD, setQTD] = useState(0);
  const [totalLocal, setTotalLocal] = useState(0);
  const [product, setProduct] = useState<any>(null);
  const [title, setTitle] = useState("Information");

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
    <Product className="Flex Bottom-Space-Children Padding-Vertical Collumn Product">
      <Title className="Flex WH-Default Product-Title">
        <Text className="Flex WH-Default Product-Title-Text">
          {title}
        </Text>
      </Title>
      {product != null ? (
        <>
          <ImageDiv className="Flex WH-Default Product-Image">
            <Image className="Flex WH-Default Product-Image-Img" src={checkIfUndefined(product?.image)}></Image>
          </ImageDiv>
          <Information className="Flex WH-Default Collumn Product-Information">
            <Title className="Flex Image-Size WH-Default Product-Information-Title">
              <Text className="Flex Image-Size WH-Default Product-Information-Title-Text">
                {checkIfUndefined(product?.name)}
              </Text>
            </Title>
            <Description className="Flex WH-Default Product-Information-Description">
              <Paragraph className="Flex WH-Default Height-Line Product-Information-Description-Paragraph">
                {checkIfUndefined(product?.description)}
              </Paragraph>
            </Description>
            <Data className="Flex WH-Default Product-Information-Data">
              <Price className="Flex WH-Auto Product-Information-Data-Price">
                <Label className="Flex WH-Auto Product-Information-Data-Price-Label">
                  Price: &#20;
                </Label>
                <Text className="Flex WH-Auto Product-Information-Data-Price-Text">
                  {checkIfUndefined(product?.price)} &#20;
                </Text>
              </Price>
            </Data>
          </Information>
          <Actions className="Flex WH-Default Product-Actions">
            {/* <SubActions className="Flex WH-Default Product-Actions-SubActions">
              <Action className="Flex WH-Auto Product-Actions-SubActions-Action">
                <button className="Flex WH-Auto Flex-Center Button-Square Product-Actions-SubActions-Action-Button" onClick={handleSubQTD}>
                  -
                </button>
              </Action>
              <Display className="Flex WH-Auto Product-Actions-SubActions-Display">
                <input type="text" className="Input-Default" value={QTD} />
                <Text className="Flex WH-Auto Flex-Center Display-Text Product-Actions-SubActions-Display-Text">
                  {QTD}
                </Text>
              </Display>
              <Action className="Flex WH-Auto Product-Actions-SubActions-Action">
                <button className="Flex WH-Auto Flex-Center Button-Square Product-Actions-SubActions-Action-Button" onClick={handleAddQTD}>
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
            <Action className="Flex Flex-Center WH-Default Product-Actions-Action">
              <button className="Flex Flex-Center WH-Default Button-Default Product-Actions-Action-Button" onClick={handleAddInCart}>
                adicionar ao carrinho
              </button>
            </Action>
          </Actions>
        </>
      ) : null }
    </Product>
  );
}
const ShoppingCartTemplate: FunctionComponent<any> = _ => {

  const [selectedProduct, setSelectedProduct] = useState([]);

  const [title, setTitle] = useState("Cart");

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
const ConfirmationTemplate: FunctionComponent<any> = _ => {

  const [nome, setNome] = useState<any>("");
  const [formaDePagamento, setFormaDePagamento] = useState<any>("");
  const [precisaTroco, setPrecisaTroco] = useState<any>(false);
  const [troco, setTroco] = useState<any>(0);
  const [formaDeRecebimento, setFormaDeRecebimento] = useState<any>("");
  const [endereco, setEndereco] = useState<any>("");

  const [selectedProduct, setSelectedProduct] = useState<any>([]);

  const [title, setTitle] = useState<any>("Confirmation");

  const products = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if(products != null){
      setSelectedProduct(products.filter((product: any) => product.itIsInCart));
    }
  }, [products]);

  const handleSetOrder = () => {
    dispatch(addOrder(createOrder(selectedProduct, {
      name: nome,
      formaDePagamento: formaDePagamento,
      precisaTroco: precisaTroco,
      troco: troco,
      formaDeRecebimento: formaDeRecebimento,
      endereco: endereco
    })));
    dispatch(updateProducts([...products.map((oldProduct: any) => ({
      ...oldProduct,
      count: oldProduct.count - oldProduct.preSelected,
      preSelected: 0,
      total: 0,
      itIsInCart: false
    }))]));
  }

  return (
    <Confirmation className="Flex Collumn Confirmation">
      <Title>
        <Text>
          {title}
        </Text>
      </Title>
      {!arrayIsEmpty(selectedProduct) ? (
        <>
          <Form className="Flex Collumn Confirmation-Form">
            <SubForm className="Flex Confirmation-Form-SubForm">
              <Label className="Flex Confirmation-Form-SubForm-Label">
                Nome
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" onChange={e => setNome(e.target.value)}/>
            </SubForm>
            <SubForm className="Flex Confirmation-Form-SubForm">
              <Title className="Flex Confirmation-Form-SubForm-Title">
                <Text className="Flex Confirmation-Form-SubForm-Title-text">
                  Forma de pagamento
                </Text>
              </Title>
              <Label className="Flex Confirmation-Form-SubForm-Label">
                dinheiro
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" type="radio" value="dinheiro" checked={formaDePagamento == "dinheiro"} onChange={e => setFormaDePagamento(e.target.value)}/>
              <Label className="Flex Confirmation-Form-SubForm-Label">
                cartão
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" type="radio" value="cartão" checked={formaDePagamento == "cartão"} onChange={e => setFormaDePagamento(e.target.value)}/>
              <Label className="Flex Confirmation-Form-SubForm-Label">
                pix
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" type="radio" value="pix" checked={formaDePagamento == "pix"} onChange={e => setFormaDePagamento(e.target.value)}/>
            </SubForm>
            <SubForm className="Flex Confirmation-Form-SubForm">
              <Label className="Flex Confirmation-Form-SubForm-Label">
                Toco
              </Label>
              <Label className="Flex Confirmation-Form-SubForm-Label">
                Precisa de troco?
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" type="checkbox" value={precisaTroco} checked={precisaTroco} onChange={e => setPrecisaTroco((oldPrecisaTroco: any) => !oldPrecisaTroco)}/>
              <input className="Flex Confirmation-Form-SubForm-Input" onChange={e => setTroco(e.target.value)}/>
            </SubForm>
            <SubForm className="Flex Confirmation-Form-SubForm">
              <Title className="Flex Confirmation-Form-SubForm-Title">
                <Text className="Flex Confirmation-Form-SubForm-Title-text">
                  Forma de Recebimento
                </Text>
              </Title>
              <Label className="Flex Confirmation-Form-SubForm-Label">
                Retirada
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" type="radio" value="Retirada" checked={formaDeRecebimento == "Retirada"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
              <Label className="Flex Confirmation-Form-SubForm-Label">
                Entegra
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" type="radio" value="Entegra" checked={formaDeRecebimento == "Entegra"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
            </SubForm>
            <SubForm className="Flex Confirmation-Form-SubForm">
              <Label className="Flex Confirmation-Form-SubForm-Label">
                Endereço
              </Label>
              <input className="Flex Confirmation-Form-SubForm-Input" onChange={e => setEndereco(e.target.value)}/>
            </SubForm>
          </Form>
          <Products className="Flex Collumn Confirmation-Products">
            {selectedProduct.map((product: any) => (
              <Product className="Flex Confirmation-Products-Product" key={checkIfUndefined(product?.key)}>
                <ImageDiv className="Flex Image-Size Flex-Center Confirmation-Products-Product-Image">
                  <Image className="Flex Image-Size Flex-Center Confirmation-Products-Product-Image-Img" src={checkIfUndefined(product?.image)}/>
                </ImageDiv>
                <Information className="Flex Collumn Confirmation-Products-Product-Information">
                  <Description className="Flex Confirmation-Products-Product-Information-Description">
                    <Text className="Flex Confirmation-Products-Product-Information-Description-Paragraph">
                      {checkIfUndefined(product?.description)}
                    </Text>
                  </Description>
                  <Data className="Flex">
                    <Price className="Flex Confirmation-Products-Product-Information-Price">
                      <Label className="Flex Confirmation-Products-Product-Information-Price-Label">
                        Price: &#20;
                      </Label>
                      <Text className="Flex Confirmation-Products-Product-Information-Price-Text">
                        {checkIfUndefined(product?.price)} &#20;
                      </Text>
                    </Price>
                    <Count className="Flex Confirmation-Products-Product-Information-Count">
                      <Label className="Flex Confirmation-Products-Product-Information-Count-Label">
                        count: &#20;
                      </Label>
                      <Text className="Flex Confirmation-Products-Product-Information-Count-Text">
                        {checkIfUndefined(product?.preSelected)} &#20;
                      </Text>
                    </Count>
                    <Total className="Flex Confirmation-Products-Product-Information-Total">
                      <Label className="Flex Confirmation-Products-Product-Information-Total-Label">
                        Total: &#20;
                      </Label>
                      <Text className="Flex Confirmation-Products-Product-Information-Total-Text">
                        {checkIfUndefined(product?.total)} &#20;
                      </Text>
                    </Total>
                  </Data>
                </Information>
              </Product>
            ))}
          </Products>
          <Painel>
            <Display className="Flex Cart-Products-Product-Actions-Display">
              <Text className="Flex Cart-Products-Product-Actions-Display-Text">
                {"Itens: " + selectedProduct.length}
              </Text>
            </Display>
            <Display className="Flex Cart-Products-Product-Actions-Display">
              <Text className="Flex Cart-Products-Product-Actions-Display-Text">
                {"Número: " + selectedProduct.reduce((a: any, b: any) => a + b.preSelected, 0)}
              </Text>
            </Display>
            <Display className="Flex Cart-Products-Product-Actions-Display">
              <Text className="Flex Cart-Products-Product-Actions-Display-Text">
                {"Preço Total: " + selectedProduct.reduce((a: any, b: any) => a + b.total, 0)}
              </Text>
            </Display>
          </Painel>
          <Actions className="Flex Confirmation-Actions">
            <Action className="Flex Confirmation-Actions-Action-Button">
              <button className="Flex Confirmation-Actions-Action-Button">
                Voltar
              </button>
            </Action>
            <Action className="Flex Confirmation-Actions-Action-Button">
              <button className="Flex Confirmation-Actions-Button" onClick={handleSetOrder}>
                Confimar
              </button>
            </Action>
          </Actions>
        </>
      ) : null}
    </Confirmation>
  );
}
const StatusTemplate: FunctionComponent<any> = _ => {

  const orders = useSelector((state: any) => state.orders);

  const [title, setTitle] = useState("Status");

  return (
    <Status className="Flex Status">
      <Title>
        <Text>
          {title}
        </Text>
      </Title>
      {orders.map((order: any) => (
        <Order key={checkIfUndefined(order?.index)}>
          <ImageDiv className="Flex Image-Size Status-Image">
            <Image className="Flex Image-Size Status-Image-Img" src={statusImage[checkIfUndefined(order?.status)]}/>
          </ImageDiv>
          <Display className="Flex Status-Display">
            <Text className="Flex Status-Display-Text">
              {statusMenssage[checkIfUndefined(order?.status)]}
            </Text>
          </Display>
          <History className="Flex Status-history">
            <Title className="Flex Status-history-title">
              <DateAndHour className="Flex Status-history-title-DateAndHour">
                {
                  new Date(checkIfUndefined(order?.date)).toLocaleDateString("pt-br")
                  +" - "+
                  new Date(checkIfUndefined(order?.date)).getHours()
                  +":"+
                  new Date(checkIfUndefined(order?.date)).getMinutes()
                  +":"+
                  ((new Date(checkIfUndefined(order?.date)).getSeconds()) < 10 ? "0"+(new Date(checkIfUndefined(order?.date)).getSeconds()) : (new Date(checkIfUndefined(order?.date)).getSeconds()))
                }
              </DateAndHour>
            </Title>
            {"name: " + checkIfUndefined(order?.formulario?.name)}
            <br/>
            {"formaDePagamento: " + checkIfUndefined(order?.formulario?.formaDePagamento)}
            <br/>
            {"precisaTroco: " + checkIfUndefined(order?.formulario?.precisaTroco)}
            <br/>
            {"troco: " + checkIfUndefined(order?.formulario?.troco)}
            <br/>
            {"formaDeRecebimento: " + checkIfUndefined(order?.formulario?.formaDeRecebimento)}
            <br/>
            {"endereco: " + checkIfUndefined(order?.formulario?.endereco)}
            <br/>
            <Products className="Flex Status-Products">
              {checkIfUndefined(order?.products).map((product: any) => (
                <Product className="Flex Status-Products-Product" key={checkIfUndefined(product?.key)}>
                  <ImageDiv className="Flex Image-Size Flex-Center Status-Products-Product-Image">
                    <Image className="Flex Image-Size Flex-Center Status-Products-Product-Image-Img" src={checkIfUndefined(product?.image)}/>
                  </ImageDiv>
                  <Information className="Flex Status-Products-Product-Information">
                    <Description className="Flex Status-Products-Product-Information-Description">
                      <Text className="Flex Ellipse Status-Products-Product-Information-Description-Text">
                        {checkIfUndefined(product?.description)}
                      </Text>
                    </Description>
                    <Price className="Flex Status-Products-Product-Information-Price">
                      <Text className="Flex Status-Products-Product-Information-Price-Text">
                        {"Price: " + checkIfUndefined(product?.price)}
                      </Text>
                    </Price>
                    <Count className="Flex Status-Products-Product-Information-Count">
                      <Text className="Flex Status-Products-Product-Information-Count-Text">
                        {"PreSelected: " + checkIfUndefined(product?.preSelected)}
                      </Text>
                    </Count>
                    <Total className="Flex Status-Products-Product-Information-Total">
                      <Text className="Flex Status-Products-Product-Information-Total-Text">
                        {"Total: " + checkIfUndefined(product?.total)}
                      </Text>
                    </Total>
                  </Information>
                </Product>
              ))}
            </Products>
          </History>
        </Order>
      ))}
    </Status>
  );
}

const Restaurant: FunctionComponent<any> = () => {

  const [productsOrigin, _] = useState(getAllProducts());

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(updateProducts(productsOrigin));
  }, []);

  return (

    <div id="store">

      <NavegationTemplate></NavegationTemplate>

      <hr/>
      <ProductsTemplate></ProductsTemplate>

      <hr/>
      <ProductTemplate></ProductTemplate>

      <hr/>
      <ShoppingCartTemplate></ShoppingCartTemplate>

      <hr/>
      <ConfirmationTemplate></ConfirmationTemplate>

      <hr/>
      <StatusTemplate></StatusTemplate>

    </div>
  );

}

const checkIfUndefined = (value: any): any => value != undefined ? value : null;

const arrayIsEmpty = (array: any): any => array != undefined && array != null && array?.length != null && array?.length != undefined && array?.length > 0 ? false : true;

const createOrder = (products: any, formulario: any): any => {
  return {
    index: Math.random(),
    status: 3,
    date: Date(),
    formulario: {...formulario},
    products: [...products.filter((product: any) => product.itIsInCart)]
  };
}

const getAllProducts = () => {
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  return [
    {
      index: 0,
      key: Math.random(),
      image: hambuguerImage,
      name: "Hambuguer",
      description: description,
      price: 1,
      count: 5,
      show: false,
      preSelected: 0,
      total: 0,
      itIsInCart: false
    }
    ,
    {
      index: 1,
      key: Math.random(),
      image: hotdogImage,
      name: "Hot-Dog",
      description: description,
      price: 2,
      count: 5,
      show: false,
      preSelected: 0,
      total: 0,
      itIsInCart: false
    },
    {
      index: 2,
      key: Math.random(),
      image: pizzaImage,
      name: "Pizza",
      description: description,
      price: 3,
      count: 5,
      show: false,
      preSelected: 0,
      total: 0,
      itIsInCart: false
    }
  ];
}

const statusMenssage = ["Arguadando Confirmação", "Em Preparo", "Enviado", "Concluido"];

const statusImage = [waitingImage, cookingImage, deliveryImage, confirmImage];

const NavegationItems = [
  "Products", "Product", "Shopping Cart", "Confirmation", "Status"
];

export default Restaurant