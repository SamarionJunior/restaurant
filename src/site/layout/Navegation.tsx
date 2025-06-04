/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Templates/restaurant.scss"
import "../../css/components/navegation.scss"

import { useEffect, useState, type FunctionComponent, type ReactNode } from "react";
import { Navegation, NavegationItem } from "../components/components.tsx";
import type { PropsNavagetion } from "../../typescript/props.ts";

import { FaStore } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { NavegationItems } from "../../typescript/Variables.ts";

const renderNavegationIcon = (value: string, navegationItems: string[]) : ReactNode => {
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
    default:
      return <FaStore/>;
  }
};

const NavegationTemplate: FunctionComponent<any> = (props: PropsNavagetion) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;
  const navegationSelected = props.navegationSelected;

  const [items, setItems] = useState<string[]>(navegationItems);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() : void => {
    setItems(NavegationItems);
  }, [NavegationItems]);

  useEffect(() : void => {
    (items.length > 0 ) ? setShow(true) : setShow(false);
  }, [items]);

  const setPages = (value: string) : void => {
    setNavegationSelected(value);
  }

  return (
    <Navegation className="Navegation">
      <NavegationItem className="NavegationItem">
      {show ? items.map((item: string) => (
        <button className={"Button" + (navegationSelected == item ? " Sublinhado" : "")} onClick={() => setPages(item)} key={item}>
          {renderNavegationIcon(item, navegationItems)}
        </button>
      )) : null}
      </NavegationItem>
    </Navegation>
  );
}

export default NavegationTemplate;