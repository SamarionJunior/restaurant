/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/restaurant.scss"
import "../../css/navegation.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { NavegationItems } from "../../typescript/functions.ts";
import { Navegation, NavegationItem } from "../components/components.tsx";
import type { PropsPages } from "../../typescript/props.ts";

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
          return <LuExpand/>;
          break;
        case navegationItems[2]:
          return <FaShoppingCart/>;
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

export default NavegationTemplate;