/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/restaurant.scss"
import "../../css/navegation.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../data/redux/slices/restaurant/productsSlice.ts";
import ProductsLayout from "../layout/Products.tsx";
import ProductLayout from "../layout/Product.tsx";
import { getAllProducts, NavegationItems } from "../../typescript/functions.ts";
import ShoppingCartLayout from "../layout/ShoppingCart.tsx";
import ConfirmationLayout from "../layout/Confirmation.tsx";
import StatusLayout from "../layout/Status.tsx";
import { Navegation, NavegationItem, Text } from "../components/components.tsx";
import type { PropsPages } from "../../typescript/props.ts";
// import { Navegation, NavegationItem, Text } from "../components/components.tsx";

import { FaStore } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

const NavegationTemplate: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props?.setNavegationSelected;
  const navegationItems = props?.navegationItems;
  const navegationSelected = props?.navegationSelected;

  const [items, setItems] = useState(navegationItems);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setItems(NavegationItems);
  }, [NavegationItems]);

  useEffect(() => {
    if(items != undefined && items != null && items.length > 0 ){
      setShow(true);
    }else{
      setShow(false);
    }
  }, [items]);

  const setPages = (value: string) => {
    if(setNavegationSelected != null && setNavegationSelected != undefined){
      setNavegationSelected(value);
    }
  }

  const renderNavegationIcon = (value: string) => {
    if(navegationItems != null && navegationItems != undefined){
      switch (value) {
        case navegationItems[0]:
          return <FaStore/>;
          break;
        case navegationItems[1]:
          return <FaShoppingCart/>;
          break;
        case navegationItems[2]:
          return <LuExpand/>;
          break;
        case navegationItems[3]:
          return <FaMoneyCheck/>;
          break;
        case navegationItems[4]:
          return <FaHistory/>;
          break;
      }
    }
  };

  return (
    <Navegation className="Navegation">
      <NavegationItem className="NavegationItem">
      {show ? items?.map((item: string) => (
        <button className={"Button" + (navegationSelected == item ? " Sublinhado" : "")} onClick={() => setPages(item)} key={item}>
          {renderNavegationIcon(item)}
        </button>
      )) : null}
      </NavegationItem>
    </Navegation>
  );
}

const Restaurant: FunctionComponent<any> = () => {

  const [navegationItems, setNavegationItems] = useState<string[]>(NavegationItems);
  const [navegationSelected, setNavegationSelected] = useState<string>(navegationItems[0]);
  const [CurretPage, setCurrentPage] = useState<FunctionComponent<any>>(() => ProductsLayout);

  // setNavegationSelected(navegationItems[0]);

  const [productsOrigin, ] = useState(getAllProducts());

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(updateProducts(productsOrigin));
  }, []);

  useEffect(() => {

    switch (navegationSelected) {
      case navegationItems[0]:
        setCurrentPage(() => ProductsLayout);
        break;
      case navegationItems[1]:
        setCurrentPage(() => ProductLayout);
        break;
      case navegationItems[2]:
        setCurrentPage(() => ShoppingCartLayout);
        break;
      case navegationItems[3]:
        setCurrentPage(() => ConfirmationLayout);
        break;
      case navegationItems[4]:
        setCurrentPage(() => StatusLayout);
        break;
    }

  }, [navegationSelected]);

  return (

    <div className="Restaurant">

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <CurretPage setNavegationSelected={setNavegationSelected} navegationItems={navegationItems}></CurretPage>

      {/* <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>

      <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate> */}

    </div>
  );

}



export default Restaurant