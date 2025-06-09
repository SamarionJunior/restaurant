/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Confirmation.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { addOrder } from "../../data/redux/slices/restaurant/ordersSlice.ts";
import { arrayIsEmpty, checkIfUndefined, converteToMoney, createOrder } from "../../typescript/functions.ts";
import { Action, Actions, Confirmation, Content, Count, Data, Description, Display, Form, Image, ImageDiv, Information, Label, Layout, Price, Product, Products, Resume, SubForm, Text, Title, Total } from "../components/components.tsx";
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

  const indexNavegationItems: number = 3;

  const handleSetOrder = (): void => {
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
    setNavegationSelected(navegationItems[indexNavegationItems + 1]);
  }

  const handleToGoBack = () : void => {
    setNavegationSelected(navegationItems[indexNavegationItems - 1]);
  };

  // if(selectedProduct.length == 0){
  //   return (<div>Nenhum Produto para Confirmar!</div>);
  // }

  return (
    <LayoutLayout id="e" className="Detail bg-4">
      <Confirmation className="Confirmation">
        {/* {!arrayIsEmpty(selectedProduct) ? (
          <>
            <Form className="Form">
              <SubForm className="SubForm-Name">
                <Label className="Label">
                  {Contents.Form.Name.Labels.Default}
                </Label>
                <input className="Input-Text" placeholder={Contents.Form.Name.Placeholders.Default} value={nome} onChange={e => setNome(e.target.value)}/>
              </SubForm>
              <Title className="Title">
                <Text className="Text">
                  {Contents.Form.Payment.Title.Default}
                </Text>
              </Title>
              <SubForm className="SubForm-Payment">
                <input className="Input" type="radio" value={Contents.Form.Payment.Labels.Money.toLocaleLowerCase()} checked={formaDePagamento == "dinheiro"} onChange={e => setFormaDePagamento(e.target.value)}/>
                <Label className="Label">
                  {Contents.Form.Payment.Labels.Money}
                </Label>
                <input className="Input" type="radio" value={Contents.Form.Payment.Labels.Card.toLocaleLowerCase()} checked={formaDePagamento == "cartão"} onChange={e => setFormaDePagamento(e.target.value)}/>
                <Label className="Label">
                  {Contents.Form.Payment.Labels.Card}
                </Label>
                <input className="Input" type="radio" value={Contents.Form.Payment.Labels.PIX.toLocaleLowerCase()} checked={formaDePagamento == "pix"} onChange={e => setFormaDePagamento(e.target.value)}/>
                <Label className="Label">
                  {Contents.Form.Payment.Labels.PIX}
                </Label>
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
                <input className="Input-CheckBox" type="checkbox" value={precisaTroco.toString()} checked={precisaTroco} onChange={() => setPrecisaTroco((oldPrecisaTroco: any) => !oldPrecisaTroco)}/>
                <input className="Input-Text" type="text" placeholder={Contents.Form.Troco.Placeholders.Default} value={troco} onChange={e => setTroco(Number.parseFloat(e.target.value))}/>
              </SubForm>
              <Title className="Title">
                <Text className="Text">
                  {Contents.Form.Delivery.Title.Default}
                </Text>
              </Title>
              <SubForm className="SubForm-Delivery">
                <input className="Input" type="radio" value={Contents.Form.Delivery.Labels.Pickup.toLocaleLowerCase()} checked={formaDeRecebimento == "retirada"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
                <Label className="Label">
                  {Contents.Form.Delivery.Labels.Pickup}
                </Label>
                <input className="Input" type="radio" value={Contents.Form.Delivery.Labels.Delivery.toLocaleLowerCase()} checked={formaDeRecebimento == "entegra"} onChange={e => setFormaDeRecebimento(e.target.value)}/>
                <Label className="Label">
                  {Contents.Form.Delivery.Labels.Delivery}
                </Label>
              </SubForm>
              <SubForm className="SubForm-Address">
                <Label className="Label">
                  {Contents.Form.Address.Labels.Default}
                </Label>
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
        ) : null} */}
      </Confirmation>
    </LayoutLayout>
  );
}

export default ConfirmationLayout;