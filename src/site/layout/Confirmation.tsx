/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/global/classes.scss"
import "../../css/Layouts/Confirmation.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../data/redux/slices/restaurant/productsSlice.ts";
import { addOrder } from "../../data/redux/slices/restaurant/ordersSlice.ts";
import { arrayIsEmpty, converteToMoney, createOrder, toLink } from "../../typescript/functions.ts";
import { Check, Form, GroupCheck, Label, Products, SubForm } from "../components/components.tsx";
import type { PropsPages } from "../../typescript/props.ts";
import { Contents } from "../../typescript/content.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import Warning from "../templates/Warning.tsx";
import LayoutLayout from "../templates/Layout.tsx";
import ProductHorizontal from "../templates/ProductHorizontal.tsx";
import Data from "../components/Data.tsx";
import KeyValue from "../templates/KeyValue.tsx";
import PageControllers from "../templates/PageControllers.tsx";

const getFilteredProducts = (products: ProductType[]) : ProductType[] => products.filter((product: ProductType) : boolean => product.itIsInCart);

const idTSX: string = "e";

const classNameLayoutDefault: string = "Confirmation";
const classNameBackgroundLayout: string = "bg-4";

const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;

const classNameNoItems: string = "NoItems";

const ConfirmationProducts: FunctionComponent<any> = () => (<Warning id={idTSX} className={`${classNameTSX} ${classNameNoItems}`} message={"Nenhum Produto para Confirmar!"}></Warning>);

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

  if(selectedProduct.length == 0){
    return (
      <ConfirmationProducts></ConfirmationProducts>
    );
  }

  return (
    <LayoutLayout id="e" className="Confirmation bg-4">
      {!arrayIsEmpty(selectedProduct) ? (
        <>
          <Form className="Form">
            <SubForm className="SubFrom">
              <h1 className="Title">{Contents.Form.Name.Labels.Default}</h1>
              <input className="Input-Text" name="nome" placeholder={Contents.Form.Name.Placeholders.Default} value={nome} onChange={e => setNome(e.target.value)}/>
            </SubForm>
            <SubForm className="SubFrom">
              <h1 className="Title">{Contents.Form.Payment.Title.Default}</h1>
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
            <SubForm className="SubFrom SubForm-Troco">
              <h1 className="Title">{Contents.Form.Troco.Title.Default}</h1>
              <Check className="Check">
                <input className="Input-CheckBox" type="checkbox" value={precisaTroco.toString()} checked={precisaTroco} onChange={() => setPrecisaTroco((oldPrecisaTroco: any) => !oldPrecisaTroco)}/>
                <Label className="Label">
                  &#20; {Contents.Form.Troco.Labels.Default} &#20;
                </Label>
              </Check>
              <label className="Label" htmlFor="nome">{"Quanto?"}</label>
              <input className="Input-Text" type="text" placeholder={Contents.Form.Troco.Placeholders.Default} value={troco} onChange={e => setTroco(Number.parseFloat(e.target.value))}/>
            </SubForm>
            <SubForm className="SubFrom">
              <h1 className="Title">{Contents.Form.Delivery.Title.Default}</h1>
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
            <SubForm className="SubFrom">
              <h1 className="Title">{Contents.Form.Address.Labels.Default}</h1>
              <input className="Input-Text" placeholder={Contents.Form.Address.Placeholders.Default} value={endereco} onChange={e => setEndereco(e.target.value)}/>
            </SubForm>
          </Form>
          <Data className="Data">
            <KeyValue 
              keyName={`${Contents.Labels.Items}: `}
              value={`${selectedProduct.length} `}
            />
            <KeyValue 
              keyName={`${Contents.Labels.Products}: `}
              value={`${selectedProduct.reduce((a: number, b: ProductType) => a + b.preSelected, 0)} `}
            />
            <KeyValue 
              keyName={`${Contents.Labels.Total}: `}
              value={`${converteToMoney(selectedProduct.reduce((a: number, b: ProductType) => a + b.total, 0))} `}
            />
          </Data>
          <PageControllers className="PageControllers"
            onClickBack = {handleToGoBack}
            onClickNext = {handleSetOrder}
            buttonBack = {Contents.Buttons.Voltar}
            buttonNext = {Contents.Buttons.Confirm}
          />
          <Products className="Products">
            {selectedProduct.map((product: any) => (
              <ProductHorizontal
                key={product.key}

                className="Product-Horizontal"
                product={product}
                onClick={() => {return}}

                Data={
                  <Data className="Data">
                    <KeyValue 
                    keyName={`${Contents.Labels.Price}: `}
                    value={`${converteToMoney(product.price)} `}
                    />
                    <KeyValue 
                    keyName={`${Contents.Labels.Count}: `}
                    value={`${product.preSelected} `}
                    />
                    <KeyValue 
                    keyName={`${Contents.Labels.Total}: `}
                    value={`${converteToMoney(product.total)} `}
                    />
                  </Data>
                }
              />
            ))}
          </Products>
        </>
      ) : null}
    </LayoutLayout>
  );
}

export default ConfirmationLayout;