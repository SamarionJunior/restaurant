/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Home.scss"
/// IMAGE ///
import pizza from "../../assets/background/pizza1.jpg";

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductShow } from "../../data/redux/slices/restaurant/productsSlice.ts";
/// TYPESCRIPT ///
import { arrayIsEmpty } from "../../typescript/functions.ts";
import type { PropsPages } from "../../typescript/props.ts";
import type { ProductType, StateType } from "../../typescript/types.ts";
import { Buttons, Content, Display, Home, Painel, Slogan, Space } from "../components/components.tsx";

const toFilterByGreaterThan = <T,>(items: T[] | any[], proprity: string, value: number) : T[] | any[] => items.filter((item: T | any) : boolean => item[proprity] > value);
const getAvailableProducts = (products: ProductType[]) : ProductType[] => toFilterByGreaterThan<ProductType>(products, "count", 0);

const HomeLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;

  const dispatch = useDispatch();

  const products: ProductType[] = useSelector((state: StateType) : ProductType[] =>  state.products);
  
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>(getAvailableProducts(products));

  const [show, setShow] = useState<boolean>(false);

  useEffect(() : void => {
    !arrayIsEmpty(products) ? setShow(true) : setShow(false);
    setProductsFiltered(getAvailableProducts(products));
  }, [products]);

  const handleShow = (index: number) : void => {
    if(index >= 0){
      dispatch(updateProductShow(index));
      setNavegationSelected(navegationItems[1]);
    }
  }

  // if(productsFiltered.length == 0){
  //   return (<div>Nenhum Produto no Cardápio!</div>);
  // }

  return (
    <Home id="a" className="Tab Home bg-2">
      <Space className="Space Area-CA"></Space>
      <Content className="Content Area-CB">
        <Painel className="Painel Area-A">
          <Display className="Display">
            Resturant
          </Display>
          <Slogan className="Slogan">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Slogan>
          <Buttons className="Buttons">
            <button className="Button">
              Acessar o Cardápio
            </button>
          </Buttons>
        </Painel>
        <Painel className="Painel Area-B">
          <img className="Img" src={pizza} alt="" />
        </Painel>
      </Content>
      <Space className="Space None Area-CA"></Space>
    </Home>
  );
}

export default HomeLayout;