/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Status.scss"

import { type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Count, Data, DateAndHour, Description, Display, History, Image, ImageDiv, Information, Label, Order, Price, Product, Products, Status, Text, Title, Total } from "../components/components.tsx";
import { converteToMoney, getDataAndHour } from "../../typescript/functions.ts";
import { statusImage, statusMenssage } from "../../typescript/Variables.ts";
import { Contents } from "../../typescript/content.ts";
import type { OrderType, StateType } from "../../typescript/types.ts";
import LayoutLayout from "../components/Layout.tsx";

const StatusLayout: FunctionComponent<any> = _ => {

  const orders: OrderType[] = useSelector((state: StateType) : OrderType[] => state.orders);

  // if(orders.length == 0){
  //   return (<div>Nenhum Pedido Realizado!</div>);
  // }

  return (
    <LayoutLayout id="f" className="Status bg-5">
      <Status className="Orders">
        {orders.map((order: any) => (
          <Order className="Order" key={order.index}>
            <ImageDiv className="Image">
              <Image className="Img" src={statusImage[order.status]}/>
            </ImageDiv>
            <Display className="Display">
              <Text className="Text">
                {statusMenssage[order.status]}
              </Text>
            </Display>
            <History className="History">
              <Title className="Title">
                <DateAndHour className="DateAndHour">
                  {getDataAndHour(order.date)}
                </DateAndHour>
              </Title>
              <Data className="Data">
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Form.Name.Labels.Default}: &#20;
                  </Label>
                  <Text className="Text">
                    {order.formulario.name}
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Form.Payment.Title.Default}: &#20;
                  </Label>
                  <Text className="Text">
                    {order.formulario.formaDePagamento}
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Form.Troco.Labels.Default}: &#20;
                  </Label>
                  <Text className="Text">
                    {order.formulario.precisaTroco.toString()}
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Form.Troco.Title.Default}: &#20;
                  </Label>
                  <Text className="Text">
                    {order.formulario.troco}
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Form.Delivery.Title.Default}: &#20;
                  </Label>
                  <Text className="Text">
                    {order.formulario.formaDeRecebimento}
                  </Text>
                </Display>
                <Display className="Display">
                  <Label className="Label">
                    {Contents.Form.Address.Labels.Default}: &#20;
                  </Label>
                  <Text className="Text">
                    {order.formulario.endereco}
                  </Text>
                </Display>
              </Data>
              <Products className="Products">
                {order.products.map((product: any) => (
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
                            Price: &#20;
                          </Label>
                          <Text className="Text">
                            {converteToMoney(product.price)} &#20;
                          </Text>
                        </Price>
                        <Count className="Count">
                          <Label className="Label">
                            Quantidade: &#20;
                          </Label>
                          <Text className="Text">
                            {product.preSelected} &#20;
                          </Text>
                        </Count>
                        <Total className="Total">
                          <Label className="Label">
                            Total: &#20;
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
            </History>
          </Order>
        ))}
      </Status>
    </LayoutLayout>
  );
}

export default StatusLayout