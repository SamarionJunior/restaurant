/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/components/Status.scss"

import { type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Count, Data, DateAndHour, Description, Display, History, Image, ImageDiv, Information, Label, Order, Price, Product, Products, Status, Text, Title, Total } from "../components/components.tsx";
import { checkIfUndefined, converteToMoney, statusImage, statusMenssage } from "../../typescript/functions.ts";

const StatusLayout: FunctionComponent<any> = _ => {

  const orders = useSelector((state: any) => state.orders);

  const getDataAndHour = (date: any) => {
      return (
        new Date(checkIfUndefined(date)).toLocaleDateString("pt-br")
        +" - "+
        new Date(checkIfUndefined(date)).getHours()
        +":"+
        new Date(checkIfUndefined(date)).getMinutes()
        +":"+
        ((new Date(checkIfUndefined(date)).getSeconds()) < 10 ? "0"+(new Date(checkIfUndefined(date)).getSeconds()) : (new Date(checkIfUndefined(date)).getSeconds()))
    )
  }

  return (
    <Status className="Status">
      {orders.map((order: any) => (
        <Order className="Order" key={checkIfUndefined(order?.index)}>
          <ImageDiv className="Image">
            <Image className="Img" src={statusImage[checkIfUndefined(order?.status)]}/>
          </ImageDiv>
          <Display className="Display">
            <Text className="Text">
              {statusMenssage[checkIfUndefined(order?.status)]}
            </Text>
          </Display>
          <History className="History">
            <Title className="Title">
              <DateAndHour className="DateAndHour">
                {getDataAndHour(order?.date)}
              </DateAndHour>
            </Title>
            {"name: " + checkIfUndefined(order?.formulario?.name)}
            {"formaDePagamento: " + checkIfUndefined(order?.formulario?.formaDePagamento)}
            {"precisaTroco: " + checkIfUndefined(order?.formulario?.precisaTroco)}
            {"troco: " + checkIfUndefined(order?.formulario?.troco)}
            {"formaDeRecebimento: " + checkIfUndefined(order?.formulario?.formaDeRecebimento)}
            {"endereco: " + checkIfUndefined(order?.formulario?.endereco)}
            <Products className="Products">
              {checkIfUndefined(order?.products).map((product: any) => (
                <Product className="Product-Horizontal" key={checkIfUndefined(product?.key)}>
                  <ImageDiv className="Image">
                    <Image className="FImg" src={checkIfUndefined(product?.image)}/>
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
                          Price: &#20;
                        </Label>
                        <Text className="Text">
                          {converteToMoney(checkIfUndefined(product?.price))} &#20;
                        </Text>
                      </Price>
                      <Count className="Count">
                        <Label className="Label">
                          Quantidade: &#20;
                        </Label>
                        <Text className="Text">
                          {checkIfUndefined(product?.preSelected)} &#20;
                        </Text>
                      </Count>
                      <Total className="Total">
                        <Label className="Label">
                          Total: &#20;
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
          </History>
        </Order>
      ))}
    </Status>
  );
}

export default StatusLayout