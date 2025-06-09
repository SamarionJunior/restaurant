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
import { FaHome } from "react-icons/fa";
import { toLink } from "../../typescript/functions.ts";
import type { NavegationItemType } from "../../typescript/types.ts";

const renderNavegationIcon = (value: NavegationItemType, navegationItems: NavegationItemType[]) : ReactNode => {
  switch (value.menu) {
    case navegationItems[0].menu:
      return <FaHome/>;
    case navegationItems[1].menu:
      return <FaStore/>;
    case navegationItems[2].menu:
      return <LuExpand/>;
    case navegationItems[3].menu:
      return <FaShoppingCart/>;
    case navegationItems[4].menu:
      return <FaMoneyCheck/>;
    case navegationItems[5].menu:
      return <FaHistory/>;
    default:
      return <FaStore/>;
  }
};

const NavegationTemplate: FunctionComponent<any> = (props: PropsNavagetion) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;
  const navegationSelected = props.navegationSelected;

  const [items, setItems] = useState<NavegationItemType[]>(navegationItems);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() : void => {
    setItems(NavegationItems);
  }, [NavegationItems]);

  useEffect(() : void => {
    (items.length > 0 ) ? setShow(true) : setShow(false);
  }, [items]);

  const setPages = (value: NavegationItemType) : void => {
    setNavegationSelected(value);
  }

  return (
    <Navegation className="Navegation">
      <NavegationItem className="NavegationItem">
      {show ? items.map((item: NavegationItemType, index: number) => (
        <button
          className={"Button" + (navegationSelected.menu == item.menu ? " Sublinhado" : "")}
          onClick={(e) => {
            setPages(item), 
            toLink(e, item.id)
          }}
          key={index}
        >
          {renderNavegationIcon(item, navegationItems)}
        </button>
      )) : null}
      </NavegationItem>
    </Navegation>
  );
}

export default NavegationTemplate;