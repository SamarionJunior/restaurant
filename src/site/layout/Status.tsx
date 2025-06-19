/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/global/classes.scss"
import "../../css/Layouts/Status.scss"

import { type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Order, Products } from "../components/components.tsx";
import { converteToMoney, getDataAndHour } from "../../typescript/functions.ts";
import { statusImage, statusMenssage } from "../../typescript/Variables.ts";
import { Contents } from "../../typescript/content.ts";
import type { OrderType, StateType } from "../../typescript/types.ts";
import Warning from "../templates/Warning.tsx";
import LayoutLayout from "../templates/Layout.tsx";
import ImageDiv from "../templates/ImageDiv.tsx";
import Title from "../templates/Title.tsx";
import Data from "../components/Data.tsx";
import KeyValue from "../templates/KeyValue.tsx";
import ProductHorizontal from "../templates/ProductHorizontal.tsx";

const idTSX: string = "f";

const classNameLayoutDefault: string = "Status";
const classNameBackgroundLayout: string = "bg-5";

const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;

const classNameNoItems: string = "NoItems";

const WarningStatus: FunctionComponent<any> = () => (<Warning id={idTSX} className={`${classNameTSX} ${classNameNoItems}`} message={"Nenhum Pedido Realizado!"}></Warning>);

const StatusLayout: FunctionComponent<any> = _ => {

  const orders: OrderType[] = useSelector((state: StateType) : OrderType[] => state.orders);

  if(orders.length == 0){
    return (
      <WarningStatus></WarningStatus>
    );
  }

  return (
    <LayoutLayout id="f" className="Status bg-5">
      {orders.map((order: any) => (
        <Order className="Order" key={order.index}>
          <ImageDiv className="Image" srcName={statusImage[order.status]}/>
          <Title className="Title" text={statusMenssage[order.status]}/>
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
            {order.products.map((product: any) => (
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
  );
}

export default StatusLayout