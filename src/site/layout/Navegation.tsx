/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Templates/restaurant.scss"
import "../../css/components/navegation.scss"

import { useEffect, useState, type FunctionComponent } from "react";
import { Navegation, NavegationItem } from "../components/components.tsx";
import type { PropsPages } from "../../typescript/props.ts";

import { FaStore } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { NavegationItems } from "../../typescript/Variables.ts";

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
        case navegationItems[1]:
          return <LuExpand/>;
        case navegationItems[2]:
          return <FaShoppingCart/>;
        case navegationItems[3]:
          return <FaMoneyCheck/>;
        case navegationItems[4]:
          return <FaHistory/>;
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