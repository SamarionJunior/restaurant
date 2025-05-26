/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/restaurant.scss"

import { useState, type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Count, DateAndHour, Description, Display, History, Image, ImageDiv, Information, Order, Price, Product, Products, Status, Text, Title, Total } from "../components/components.tsx";
import { checkIfUndefined, statusImage, statusMenssage } from "../../typescript/functions.ts";

const StatusLayout: FunctionComponent<any> = _ => {

  const orders = useSelector((state: any) => state.orders);

  // const [title, setTitle] = useState("Status");
  const [title, ] = useState("Status");

  return (
    <Status className="Flex Status">
      <Title>
        <Text>
          {title}
        </Text>
      </Title>
      {orders.map((order: any) => (
        <Order key={checkIfUndefined(order?.index)}>
          <ImageDiv className="Flex Image-Size Status-Image">
            <Image className="Flex Image-Size Status-Image-Img" src={statusImage[checkIfUndefined(order?.status)]}/>
          </ImageDiv>
          <Display className="Flex Status-Display">
            <Text className="Flex Status-Display-Text">
              {statusMenssage[checkIfUndefined(order?.status)]}
            </Text>
          </Display>
          <History className="Flex Status-history">
            <Title className="Flex Status-history-title">
              <DateAndHour className="Flex Status-history-title-DateAndHour">
                {
                  new Date(checkIfUndefined(order?.date)).toLocaleDateString("pt-br")
                  +" - "+
                  new Date(checkIfUndefined(order?.date)).getHours()
                  +":"+
                  new Date(checkIfUndefined(order?.date)).getMinutes()
                  +":"+
                  ((new Date(checkIfUndefined(order?.date)).getSeconds()) < 10 ? "0"+(new Date(checkIfUndefined(order?.date)).getSeconds()) : (new Date(checkIfUndefined(order?.date)).getSeconds()))
                }
              </DateAndHour>
            </Title>
            {"name: " + checkIfUndefined(order?.formulario?.name)}
            <br/>
            {"formaDePagamento: " + checkIfUndefined(order?.formulario?.formaDePagamento)}
            <br/>
            {"precisaTroco: " + checkIfUndefined(order?.formulario?.precisaTroco)}
            <br/>
            {"troco: " + checkIfUndefined(order?.formulario?.troco)}
            <br/>
            {"formaDeRecebimento: " + checkIfUndefined(order?.formulario?.formaDeRecebimento)}
            <br/>
            {"endereco: " + checkIfUndefined(order?.formulario?.endereco)}
            <br/>
            <Products className="Flex Status-Products">
              {checkIfUndefined(order?.products).map((product: any) => (
                <Product className="Flex Status-Products-Product" key={checkIfUndefined(product?.key)}>
                  <ImageDiv className="Flex Image-Size Flex-Center Status-Products-Product-Image">
                    <Image className="Flex Image-Size Flex-Center Status-Products-Product-Image-Img" src={checkIfUndefined(product?.image)}/>
                  </ImageDiv>
                  <Information className="Flex Status-Products-Product-Information">
                    <Description className="Flex Status-Products-Product-Information-Description">
                      <Text className="Flex Ellipse Status-Products-Product-Information-Description-Text">
                        {checkIfUndefined(product?.description)}
                      </Text>
                    </Description>
                    <Price className="Flex Status-Products-Product-Information-Price">
                      <Text className="Flex Status-Products-Product-Information-Price-Text">
                        {"Price: " + checkIfUndefined(product?.price)}
                      </Text>
                    </Price>
                    <Count className="Flex Status-Products-Product-Information-Count">
                      <Text className="Flex Status-Products-Product-Information-Count-Text">
                        {"PreSelected: " + checkIfUndefined(product?.preSelected)}
                      </Text>
                    </Count>
                    <Total className="Flex Status-Products-Product-Information-Total">
                      <Text className="Flex Status-Products-Product-Information-Total-Text">
                        {"Total: " + checkIfUndefined(product?.total)}
                      </Text>
                    </Total>
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