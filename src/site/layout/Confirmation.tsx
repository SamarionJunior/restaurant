/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Confirmation.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { addOrder } from "../../data/redux/slices/restaurant/ordersSlice.ts";
import { arrayIsEmpty, converteToMoney, createOrder, toLink } from "../../typescript/functions.ts";
import { Action, Actions, Check, Content, Count, Data, Description, Display, Form, GroupCheck, Image, ImageDiv, Information, Label, Price, Product, Products, Resume, SubForm, Text, Title, Total } from "../components/components.tsx";
import type { PropsPages } from "../../typescript/props.ts";
import { Contents } from "../../typescript/content.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import LayoutLayout from "../components/Layout.tsx";

const getFilteredProducts = (products: ProductType[]) : ProductType[] => products.filter((product: ProductType) : boolean => product.itIsInCart);

const ConfirmationLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;

  const [nome, setNome] = useState<string>("");
  const [formaDePagamento, setFormaDePagamento] = useState<string>("");
  const [precisaTroco, setPrecisaTroco] = useState<boolean>(false);
  const [troco, setTroco] = useState<number>(0);
  const [formaDeRecebimento, setFormaDeRecebimento] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");

  const products: ProductType[] = useSelector((state: StateType) : ProductType[] => state.products);

  const [selectedProduct, setSelectedProduct] = useState<ProductType[]>(getFilteredProducts(products));

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedProduct(getFilteredProducts(products));
  }, [products]);

  const indexNavegationItems: number = 4;

  const handleToGoBack = (e: any) : void => {
    setNavegationSelected(navegationItems[indexNavegationItems - 1]);
    toLink(e, navegationItems[indexNavegationItems - 1].id);
  };

  const handleSetOrder = (e: any): void => {
    dispatch(addOrder(createOrder(selectedProduct, {
      name: nome,
      formaDePagamento: formaDePagamento,
      precisaTroco: precisaTroco,
      troco: troco,
      formaDeRecebimento: formaDeRecebimento,
      endereco: endereco
    })));
    dispatch(updateProducts([...products.map((oldProduct: ProductType) : ProductType => ({
      ...oldProduct,
      count: oldProduct.count - oldProduct.preSelected,
      preSelected: 0,
      total: 0,
      itIsInCart: false
    }))]));
    toLink(e, navegationItems[indexNavegationItems + 1].id);
    setNavegationSelected(navegationItems[indexNavegationItems + 1]);
  }

  // if(selectedProduct.length == 0){
  //   return (<div>Nenhum Produto para Confirmar!</div>);
  // }

  return (
    <LayoutLayout id="e" className="Confirmation bg-4">
        {!arrayIsEmpty(selectedProduct) ? (
          <>
            <Form className="Form">
              <SubForm className="SubForm-Text">
                <Title className="Title">
                  <Text className="Text">
                    {Contents.Form.Name.Labels.Default}
                  </Text>
                </Title>
                {/* <Label className="Label">
                  {Contents.Form.Name.Labels.Default}
                </Label> */}
                <input className="Input-Text" placeholder={Contents.Form.Name.Placeholders.Default} value={nome} onChange={e => setNome(e.target.value)}/>
              </SubForm>
              <SubForm className="SubForm-Check">
                <Title className="Title">
                  <Text className="Text">
                    {Contents.Form.Payment.Title.Default}
                  </Text>
                </Title>
                <GroupCheck className="GroupCheck">
                  <Check className="Check">
                    <input className="Input" type="radio" value={Contents.Form.Payment.Labels.Money.toLocaleLowerCase()} checked={formaDePagamento == "dinheiro"} onChange={e => setFormaDePagamento(e.target.value)}/>
                    <Label className="Label">
                      &#20; {Contents.Form.Payment.Labels.Money} &#20;
                    </Label>
                  </Check>
                  <Check className="Check">
                    <input className="Input" type="radio" value={Contents.Form.Payment.Labels.Card.toLocaleLowerCase()} checked={formaDePagamento == "cartão"} onChange={e => setFormaDePagamento(e.target.value)}/> &#20;
                    <Label className="Label">
                      &#20; {Contents.Form.Payment.Labels.Card} &#20;
                    </Label>
                  </Check>
                  <Check className="Check">
                    <input className="Input" type="radio" value={Contents.Form.Payment.Labels.PIX.toLocaleLowerCase()} checked={formaDePagamento == "pix"} onChange={e => setFormaDePagamento(e.target.value)}/> &#20;
                    <Label className="Label">
                      &#20; {Contents.Form.Payment.Labels.PIX} &#20;
                    </Label>
                  </Check>
                </GroupCheck>
              </SubForm>
              <SubForm className="SubForm-Troco">
                <Title className="Title">
                  <Text className="Text">
                    {Contents.Form.Troco.Title.Default}
                  </Text>
                </Title>
                <Check className="Check">
                  <input className="Input-CheckBox" type="checkbox" value={precisaTroco.toString()} checked={precisaTroco} onChange={() => setPrecisaTroco((oldPrecisaTroco: any) => !oldPrecisaTroco)}/>
                  <Label className="Label">
                    &#20; {Contents.Form.Troco.Labels.Default} &#20;
                  </Label>
                </Check>
                <input className="Input-Text" type="text" placeholder={Contents.Form.Troco.Placeholders.Default} value={troco} onChange={e => setTroco(Number.parseFloat(e.target.value))}/>
              </SubForm>
              <SubForm className="SubForm-Check">
                <Title className="Title">
                  <Text className="Text">
                    {Contents.Form.Delivery.Title.Default}
                  </Text>
                </Title>
                <GroupCheck className="GroupCheck">
                  <Check className="Check">
                    <input className="Input" type="radio" value={Contents.Form.Delivery.Labels.Pickup.toLocaleLowerCase()} checked={formaDeRecebimento == "retirada"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
                    <Label className="Label">
                      &#20; {Contents.Form.Delivery.Labels.Pickup} &#20;
                    </Label>
                  </Check>
                  <Check className="Check">
                    <input className="Input" type="radio" value={Contents.Form.Delivery.Labels.Delivery.toLocaleLowerCase()} checked={formaDeRecebimento == "entegra"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
                    <Label className="Label">
                      &#20; {Contents.Form.Delivery.Labels.Delivery} &#20;
                    </Label>
                  </Check>
                </GroupCheck>
              </SubForm>
              <SubForm className="SubForm-Text">
                <Title className="Title">
                  <Text className="Text">
                    {Contents.Form.Address.Labels.Default}
                  </Text>
                </Title>
                <input className="Input-Text" placeholder={Contents.Form.Address.Placeholders.Default} value={endereco} onChange={e => setEndereco(e.target.value)}/>
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
                    {selectedProduct.reduce((a: number, b: ProductType) => a + b.preSelected, 0)} &#20;
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Labels.Total}: &#20;
                  </Label>
                  <Text className="Text">
                    {converteToMoney(selectedProduct.reduce((a: number, b: ProductType) => a + b.total, 0))} &#20;
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
                      <Count className="Count">
                        <Label className="Label">
                          {Contents.Labels.Count}: &#20;
                        </Label>
                        <Text className="Text">
                          {product.preSelected} &#20;
                        </Text>
                      </Count>
                      <Total className="Total">
                        <Label className="Label">
                          {Contents.Labels.Total}: &#20;
                        </Label>
                        <Text className="Text">
                          {converteToMoney(product.total)} &#20;
                        </Text>
                      </Total>
                    </Data>
                  </Information>
                </Product>
              ))}
            </Products>
          </>
        ) : null}
    </LayoutLayout>
  );
}

export default ConfirmationLayout;