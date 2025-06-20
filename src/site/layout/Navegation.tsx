/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/global/classes.scss"
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
import { FaHome } from "react-icons/fa";
import { toLink } from "../../typescript/functions.ts";
import type { CompanyType, NavegationItemType, StateType } from "../../typescript/types.ts";
import { FiLogIn } from "react-icons/fi";
import { BiSolidBusiness } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../../data/redux/slices/restaurant/pageSlice.ts";

const renderNavegationIcon = (value: NavegationItemType, navegationItems: NavegationItemType[]) : ReactNode | null => {
  for (let index = 0; index < navegationItems.length; index++) {
    if(
      navegationItems[index].menu == value.menu
      // && value.menu != "Admin"
    ){
      switch (value.menu) {
        case "Home":
          return <FaHome/>;
        case "Products":
          return <FaStore/>;
        case "Product":
          return <LuExpand/>;
        case "Shopping Cart":
          return <FaShoppingCart/>;
        case "Confirmation":
          return <FaMoneyCheck/>;
        case "Status":
          return <FaHistory/>;
        case "Company":
          return <BiSolidBusiness />;
        case "Products":
          return <FaStore />;
        case "Orders":
          return <FaHistory />;
        case "Back":
          return <FaHome />;
        default:
          return <FaStore/>;
      }
    }
  }
  // switch (value.menu) {
  //   case navegationItems[0]?.menu:
  //     return <FaHome/>;
  //   case navegationItems[1]?.menu:
  //     return <FaStore/>;
  //   case navegationItems[2]?.menu:
  //     return <LuExpand/>;
  //   case navegationItems[3].menu:
  //     return <FaShoppingCart/>;
  //   case navegationItems[4]?.menu:
  //     return <FaMoneyCheck/>;
  //   case navegationItems[5]?.menu:
  //     return <FaHistory/>;
  //   case navegationItems[6]?.menu:
  //     return <FiLogIn />;
  //   default:
  //     return <FaStore/>;
  // }
};

const NavegationTemplate: FunctionComponent<any> = (props: PropsNavagetion) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;
  const navegationSelected = props.navegationSelected;
  const className = props?.className;

  const [items, setItems] = useState<NavegationItemType[]>(navegationItems);
  const [show, setShow] = useState<boolean>(false);

  const page: string = useSelector((state: StateType): string => state.page);

  const dispatch = useDispatch();

  useEffect(() : void => {
    setItems(navegationItems);
  }, [navegationItems]);

  useEffect(() : void => {
    (items.length > 0 ) ? setShow(true) : setShow(false);
  }, [items]);

  const setPages = (value: NavegationItemType) : void => {
    setNavegationSelected(value);
  }

  return (
    <Navegation className={"Navegation " + className}>
      <NavegationItem className="NavegationItem">
        {show ? items.map((item: NavegationItemType, index: number) =>(
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
        {page == "Restaurant" ? (
          <button
            className={"Button" + (navegationSelected.menu == "Admim" ? " Sublinhado" : "")}
            onClick={(e) => {
              dispatch(updatePage("Admin"));
              toLink(e, "a");
            }}
          >
            <FiLogIn />
          </button>
        ) : (
          <button
            className={"Button" + (navegationSelected.menu == "Restaurant" ? " Sublinhado" : "")}
            onClick={e => {
              dispatch(updatePage("Restaurant"));
              toLink(e, "a");
            }}
          >
            <FaHome />
          </button>
        )}
      </NavegationItem>
    </Navegation>
  );
}

export default NavegationTemplate;