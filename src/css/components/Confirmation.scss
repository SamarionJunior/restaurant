/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/restaurant.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { addOrder } from "../../data/redux/slices/restaurant/ordersSlice.ts";
import { arrayIsEmpty, checkIfUndefined, createOrder } from "../../typescript/functions.ts";
import { Action, Actions, Confirmation, Count, Data, Description, Display, Form, Image, ImageDiv, Information, Label, Painel, Price, Product, Products, SubForm, Text, Title, Total } from "../components/components.tsx";

const ConfirmationLayout: FunctionComponent<any> = _ => {

  const [nome, setNome] = useState<any>("");
  const [formaDePagamento, setFormaDePagamento] = useState<any>("");
  const [precisaTroco, setPrecisaTroco] = useState<any>(false);
  const [troco, setTroco] = useState<any>(0);
  const [formaDeRecebimento, setFormaDeRecebimento] = useState<any>("");
  const [endereco, setEndereco] = useState<any>("");

  const [selectedProduct, setSelectedProduct] = useState<any>([]);

  // const [title, setTitle] = useState<any>("Confirmation");
  const [title, ] = useState<any>("Confirmation");

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
              <input className="Flex Confirmation-Form-SubForm-Input" type="checkbox" value={precisaTroco} checked={precisaTroco} onChange={() => setPrecisaTroco((oldPrecisaTroco: any) => !oldPrecisaTroco)}/>
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

export default ConfirmationLayout;