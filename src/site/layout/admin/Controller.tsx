/// CSS ///
import "../../../css/global/pre-sets.scss";
import "../../../css/global/classes.scss";
import "../../../css/global/components.scss";
import "../../../css/Layouts/Confirmation.scss";

import { useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../data/redux/slices/restaurant/productsSlice.ts";
import { arrayIsEmpty, converteToMoney, createProduct, getDataAndHour } from "../../../typescript/functions.ts";
import { Form, Order, Products, SubForm } from "../../components/components.tsx";
import type { PropsPages } from "../../../typescript/props.ts";
import { Contents } from "../../../typescript/content.ts";
import type { OrderType, ProductType, StateType } from "../../../typescript/types.ts";
import LayoutLayout from "../../templates/Layout.tsx";
import ProductHorizontal from "../../templates/ProductHorizontal.tsx";
import Data from "../../components/Data.tsx";
import KeyValue from "../../templates/KeyValue.tsx";
import IsEmpty from "../../templates/IsEmpty.tsx";
import ImageDiv from "../../templates/ImageDiv.tsx";
import Title from "../../templates/Title.tsx";
import { statusImage, statusMenssage } from "../../../typescript/Variables.ts";

const ControllerLayout: FunctionComponent<any> = (props: PropsPages) => {
  
  const idPageTag = props.idPageTag;

  const classNameLayoutDefault: string = "Confirmation";
  const classNameBackgroundLayout: string = "bg-4";
  const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;
  const classNameNoItems: string = "NoItems";
  const message: string = "Nenhum Pedido para Monitorar";
  
  const orders: OrderType[] = useSelector((state: StateType) : OrderType[] => state.orders);

  // const [selectedProduct, setSelectedProduct] = useState<ProductType[]>(products);

  const dispatch = useDispatch();

  const layoutIsEmpty = false;

  // const handleAddProduct = (): void => {
  //   dispatch(addProduct(createProduct({
  //     name: nome,
  //     description: descricao,
  //     price: preco,
  //     count: quantidade
  //   })));
  // }

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
    </IsEmpty>
  );
}

export default ControllerLayout;