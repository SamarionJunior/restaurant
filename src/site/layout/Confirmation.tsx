/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Confirmation.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { addOrder } from "../../data/redux/slices/restaurant/ordersSlice.ts";
import { arrayIsEmpty, checkIfUndefined, converteToMoney, createOrder } from "../../typescript/functions.ts";
import { Action, Actions, Confirmation, Content, Count, Data, Description, Display, Form, Image, ImageDiv, Information, Label, Price, Product, Products, Resume, SubForm, Text, Title, Total } from "../components/components.tsx";
import type { PropsPages } from "../../typescript/props.ts";
import { Contents } from "../../typescript/content.ts";

const ConfirmationLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;

  const [nome, setNome] = useState<any>("");
  const [formaDePagamento, setFormaDePagamento] = useState<any>("");
  const [precisaTroco, setPrecisaTroco] = useState<any>(false);
  const [troco, setTroco] = useState<any>(0);
  const [formaDeRecebimento, setFormaDeRecebimento] = useState<any>("");
  const [endereco, setEndereco] = useState<any>("");

  const [selectedProduct, setSelectedProduct] = useState<any>([]);

  const products = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if(products != null){
      setSelectedProduct(products.filter((product: any) => product.itIsInCart));
    }
  }, [products]);

  const indexNavegationItems = 3;

  const handleSetOrder = () => {
    console.log(precisaTroco);
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
    if(setNavegationSelected != null && setNavegationSelected != undefined && navegationItems != null && navegationItems != undefined){
      setNavegationSelected(navegationItems[indexNavegationItems + 1]);
    }
  }

  const handleToGoBack = () : void => {
    setNavegationSelected(navegationItems[indexNavegationItems - 1]);
  };

  if(selectedProduct.length == 0){
    return (<div>Nenhum Produto para Confirmar!</div>);
  }

  return (
    <Confirmation className="Confirmation">
      {!arrayIsEmpty(selectedProduct) ? (
        <>
          <Form className="Form">
            <SubForm className="SubForm-Name">
              <Label className="Label">
                {Contents.Form.Name.Labels.Default}
              </Label>
              <input className="Input-Text" placeholder={Contents.Form.Name.Placeholders.Default} onChange={e => setNome(e.target.value)}/>
            </SubForm>
            <Title className="Title">
              <Text className="Text">
                {Contents.Form.Payment.Title.Default}
              </Text>
            </Title>
            <SubForm className="SubForm-Payment">
              <Label className="Label">
                {Contents.Form.Payment.Labels.Money}
              </Label>
              <input className="Input" type="radio" value={Contents.Form.Payment.Labels.Money.toLocaleLowerCase()} checked={formaDePagamento == "dinheiro"} onChange={e => setFormaDePagamento(e.target.value)}/>
              <Label className="Label">
                {Contents.Form.Payment.Labels.Card}
              </Label>
              <input className="Input" type="radio" value={Contents.Form.Payment.Labels.Card.toLocaleLowerCase()} checked={formaDePagamento == "cartão"} onChange={e => setFormaDePagamento(e.target.value)}/>
              <Label className="Label">
                {Contents.Form.Payment.Labels.PIX}
              </Label>
              <input className="Input" type="radio" value={Contents.Form.Payment.Labels.PIX.toLocaleLowerCase()} checked={formaDePagamento == "pix"} onChange={e => setFormaDePagamento(e.target.value)}/>
            </SubForm>
            <Title className="Title">
              <Text className="Text">
                {Contents.Form.Troco.Title.Default}
              </Text>
            </Title>
            <SubForm className="SubForm-Troco">
              <Label className="Label">
                {Contents.Form.Troco.Labels.Default}
              </Label>
              <input className="Input-CheckBox" type="checkbox" value={precisaTroco} checked={precisaTroco} onChange={() => setPrecisaTroco((oldPrecisaTroco: any) => !oldPrecisaTroco)}/>
              <input className="Input-Text" type="text" placeholder={Contents.Form.Troco.Placeholders.Default} onChange={e => setTroco(e.target.value)}/>
            </SubForm>
            <Title className="Title">
              <Text className="Text">
                {Contents.Form.Delivery.Title.Default}
              </Text>
            </Title>
            <SubForm className="SubForm-Delivery">
              <Label className="Label">
                {Contents.Form.Delivery.Labels.Pickup}
              </Label>
              <input className="Input" type="radio" value={Contents.Form.Delivery.Labels.Pickup.toLocaleLowerCase()} checked={formaDeRecebimento == "retirada"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
              <Label className="Label">
                {Contents.Form.Delivery.Labels.Delivery}
              </Label>
              <input className="Input" type="radio" value={Contents.Form.Delivery.Labels.Delivery.toLocaleLowerCase()} checked={formaDeRecebimento == "entegra"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
            </SubForm>
            <SubForm className="SubForm-Address">
              <Label className="Label">
                {Contents.Form.Address.Labels.Default}
              </Label>
              <input className="Input-Text" placeholder={Contents.Form.Address.Placeholders.Default} onChange={e => setEndereco(e.target.value)}/>
            </SubForm>
          </Form>
          <Content className="Content">
            <Resume className="Resume">
              <Display className="Display">
                <Label className="Label">
                  {Contents.Labels.Items}: &#20;
                </Label>
                <Text className="Text">
                  {selectedProduct.length} &#20;
                </Text>
              </Display>
              <Display className="Display">
                <Label className="Label">
                  {Contents.Labels.Products}: &#20;
                </Label>
                <Text className="Text">
                  {selectedProduct.reduce((a: any, b: any) => a + b.preSelected, 0)} &#20;
                </Text>
              </Display>
              <Display className="Display">
                <Label className="Label">
                  {Contents.Labels.Total}: &#20;
                </Label>
                <Text className="Text">
                  {converteToMoney(selectedProduct.reduce((a: any, b: any) => a + b.total, 0))} &#20;
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
                <button className="Button" onClick={handleSetOrder}>
                  {Contents.Buttons.Confirm}
                </button>
              </Action>
            </Actions>
          </Content>
          <Products className="Products">
            {selectedProduct.map((product: any) => (
              <Product className="Product-Horizontal" key={checkIfUndefined(product?.key)}>
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
                        {Contents.Labels.Price}: &#20;
                      </Label>
                      <Text className="Text">
                        {converteToMoney(checkIfUndefined(product?.price))} &#20;
                      </Text>
                    </Price>
                    <Count className="Count">
                      <Label className="Label">
                        {Contents.Labels.Count}: &#20;
                      </Label>
                      <Text className="Text">
                        {checkIfUndefined(product?.preSelected)} &#20;
                      </Text>
                    </Count>
                    <Total className="Total">
                      <Label className="Label">
                        {Contents.Labels.Total}: &#20;
                      </Label>
                      <Text className="Text">
                        {converteToMoney(checkIfUndefined(product?.total))} &#20;
                      </Text>
                    </Total>
                  </Data>
                </Information>
              </Product>
            ))}
          </Products>
        </>
      ) : null}
    </Confirmation>
  );
}

export default ConfirmationLayout;