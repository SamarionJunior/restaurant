/// sCSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Templates/restaurant.scss"
import "../../css/components/navegation.scss"
/// REACT ///
import { useEffect, useState, type FunctionComponent } from "react";
/// REDUX ///
import { useDispatch } from "react-redux";
import { updateProducts } from "../../data/redux/slices/restaurant/productsSlice.ts";
/// TYPESCRIPT ///
import { getAllProducts, idString, resizeScrollTo, scrollTo } from "../../typescript/functions.ts";
import { NavegationItemsAdmin } from "../../typescript/Variables.ts";

import HeaderLayout from "../layout/Header.tsx";
import NavegationTemplate from "../layout/Navegation.tsx";
import type { NavegationItemType } from "../../typescript/types.ts";
import CompanyLayout from "../layout/admin/Company.tsx";
import MenuLayout from "../layout/admin/Menu.tsx";
import ControllerLayout from "../layout/admin/Controller.tsx";

const Admin: FunctionComponent<any> = () => {

  const [navegationItems, ] = useState<NavegationItemType[]>(NavegationItemsAdmin);
  const [navegationSelected, setNavegationSelected] = useState<NavegationItemType>(navegationItems[0]);

  const [isFirst, setIsFirst] = useState<boolean>(true);

  const [productsOrigin, ] = useState(getAllProducts());

  const dispatch = useDispatch();

  useEffect( () => {
    removeEventListener("resize", resizeScrollTo);
    addEventListener("resize", resizeScrollTo);
    dispatch(updateProducts(productsOrigin));
  }, []);

  if(isFirst == true){
    const item: HTMLElement | null = document.getElementById(idString.id);
    const parent: HTMLElement | null = document.getElementById("root");

    if(item != null && parent != null){
      scrollTo(parent, item);
      setIsFirst(false);
    }
  }

  return (

    <div id="Restaurant" className="Restaurant">

      <HeaderLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        navegationSelected={navegationSelected}
        idPageDefault={0}
      >

        <NavegationTemplate
          setNavegationSelected={setNavegationSelected}
          navegationItems={navegationItems}
          navegationSelected={navegationSelected}
          className={"Children-JustifyContent-FlexEnd"}
        >
        </NavegationTemplate>

      </HeaderLayout>

      <CompanyLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={0}
        idPageTag="a"
      ></CompanyLayout>

      <MenuLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={1}
        idPageTag="b"
      ></MenuLayout>

      <ControllerLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={2}
        idPageTag="c"
      ></ControllerLayout>

    </div>
  );

}



export default Admin