/// CSS ///
import "../../../css/global/pre-sets.scss";
import "../../../css/global/classes.scss";
import "../../../css/global/components.scss";
import "../../../css/Layouts/Confirmation.scss";

import { type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { converteToMoney, getDataAndHour } from "../../../typescript/functions.ts";
import { Check, GroupCheck, Label, Order, Products } from "../../components/components.tsx";
import type { PropsPages } from "../../../typescript/props.ts";
import { Contents } from "../../../typescript/content.ts";
import type { OrderType, ProductType, StateType } from "../../../typescript/types.ts";
import LayoutLayout from "../../templates/Layout.tsx";
import ProductHorizontal from "../../templates/ProductHorizontal.tsx";
import Data from "../../components/Data.tsx";
import KeyValue from "../../templates/KeyValue.tsx";
import IsEmpty from "../../templates/IsEmpty.tsx";
import Title from "../../templates/Title.tsx";
import { updateStatusOrder } from "../../../data/redux/slices/restaurant/ordersSlice.ts";
import { statusIndex, statusMenssage } from "../../../typescript/Variables.ts";

const ControllerLayout: FunctionComponent<any> = (props: PropsPages) => {
  
  const idPageTag = props.idPageTag;

  const classNameLayoutDefault: string = "Confirmation";
  const classNameBackgroundLayout: string = "bg-4";
  const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;
  const classNameNoItems: string = "NoItems";
  const message: string = "Nenhum Pedido para Monitorar";
  
  const orders: OrderType[] = useSelector((state: StateType) : OrderType[] => state.orders);

  const dispatch = useDispatch();

  const layoutIsEmpty = false;

  const handleUpdateStatusOrder = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(updateStatusOrder({
      status: parseInt(e.target.value), 
      index: index
    }));
  }

  return (
    <IsEmpty
      test={layoutIsEmpty}
      WarningProps={{
        id: idPageTag,
        className: `${classNameTSX} ${classNameNoItems}`,
        message: message
      }}
    >
      <LayoutLayout id={idPageTag} className="Status bg-5">
        {orders.map((order: OrderType) => (
          <Order className="Order" key={order.index}>
            <GroupCheck className="GroupCheck Flex Collumn WH-Default">
              <Check className="Check Flex WH-Auto Flex-Center">
                <input
                  className="Input"
                  type="radio"
                  value={statusIndex["waiting"]}
                  checked={order.status == statusIndex["waiting"]}
                  onChange={e => handleUpdateStatusOrder(e, order.index)}
                />
                <Label className="Label">
                  &#20; {statusMenssage["waiting"]} &#20;
                </Label>
              </Check>
              <Check className="Check Flex WH-Auto Flex-Center">
                <input
                  className="Input"
                  type="radio"
                  value={statusIndex["confirmado"]}
                  checked={order.status == statusIndex["confirmado"]}
                  onChange={e => handleUpdateStatusOrder(e, order.index)}
                />
                <Label className="Label">
                  &#20; {statusMenssage["confirmado"]} &#20;
                </Label>
              </Check>
              <Check className="Check Flex WH-Auto Flex-Center">
                <input
                  className="Input"
                  type="radio"
                  value={statusIndex["cooking"]}
                  checked={order.status == statusIndex["cooking"]}
                  onChange={e => handleUpdateStatusOrder(e, order.index)}
                />
                <Label className="Label">
                  &#20; {statusMenssage["cooking"]} &#20;
                </Label>
              </Check>
              <Check className="Check Flex WH-Auto Flex-Center">
                <input
                  className="Input"
                  type="radio"
                  value={statusIndex["delivery"]}
                  checked={order.status == statusIndex["delivery"]}
                  onChange={e => handleUpdateStatusOrder(e, order.index)}
                />
                <Label className="Label">
                  &#20; {statusMenssage["delivery"]} &#20;
                </Label>
              </Check>
              <Check className="Check Flex WH-Auto Flex-Center">
                <input
                  className="Input"
                  type="radio"
                  value={statusIndex["entregue"]}
                  checked={order.status == statusIndex["entregue"]}
                  onChange={e => handleUpdateStatusOrder(e, order.index)}
                />
                <Label className="Label">
                  &#20; {statusMenssage["entregue"]} &#20;
                </Label>
              </Check>
            </GroupCheck>
            <Title className="Title" text={getDataAndHour(order.date)}/>
            <Data className="Data">
              <KeyValue
                keyName={`${Contents.Form.Name.Labels.Default}: `}
                value={`${order.formulario.name} `}
              />
              <KeyValue
                keyName={`${Contents.Form.Payment.Title.Default}: `}
                value={`${order.formulario.formaDePagamento} `}
              />
              <KeyValue
                keyName={`${Contents.Form.Troco.Labels.Default}: `}
                value={`${order.formulario.precisaTroco.toString()} `}
              />
              <KeyValue
                keyName={`${Contents.Form.Troco.Title.Default}: `}
                value={`${order.formulario.troco} `}
              />
              <KeyValue
                keyName={`${Contents.Form.Delivery.Title.Default}: `}
                value={`${order.formulario.formaDeRecebimento} `}
              />
              <KeyValue
                keyName={`${Contents.Form.Address.Labels.Default}: `}
                value={`${order.formulario.endereco} `}
              />
            </Data>
            <Products className="Products">
              {order.products.map((product: ProductType) => (
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
          </Order>
        ))}
      </LayoutLayout>
    </IsEmpty>
  );
}

export default ControllerLayout;