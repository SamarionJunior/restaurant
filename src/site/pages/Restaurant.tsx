/// sCSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Templates/restaurant.scss"
import "../../css/components/navegation.scss"
/// REACT ///
import { useEffect, useRef, useState, type FunctionComponent, type RefObject } from "react";
/// REDUX ///
/// TYPESCRIPT ///
import { idString, resizeScrollTo, scrollTo } from "../../typescript/functions.ts";
import { NavegationItems } from "../../typescript/Variables.ts";

import HeaderLayout from "../layout/Header.tsx";
import NavegationTemplate from "../layout/Navegation.tsx";
import type { NavegationItemType } from "../../typescript/types.ts";
// import CompanyLayout from "../layout/admin/Company.tsx";
import HomeLayout from "../layout/restaurant/Home.tsx";
import ProductsLayout from "../layout/restaurant/Products.tsx";
import ProductLayout from "../layout/restaurant/Product.tsx";
import ShoppingCartLayout from "../layout/restaurant/ShoppingCart.tsx";
import ConfirmationLayout from "../layout/restaurant/Confirmation.tsx";
import StatusLayout from "../layout/restaurant/Status.tsx";

const Restaurant: FunctionComponent<any> = () => {

  const [navegationItems, ] = useState<NavegationItemType[]>(NavegationItems);
  const [navegationSelected, setNavegationSelected] = useState<NavegationItemType>(navegationItems[0]);

  const [isFirst, setIsFirst] = useState<boolean>(true);

  // const [productsOrigin, ] = useState(getAllProducts());

  // const dispatch = useDispatch();

  const auxRef: RefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement | null>(null);

  useEffect( () => {
    removeEventListener("resize", resizeScrollTo);
    addEventListener("resize", resizeScrollTo);
    // dispatch(updateProducts(productsOrigin));
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
          navegationSelected={navegationSelected}>
        </NavegationTemplate>

      </HeaderLayout>

      <HomeLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={0}
      ></HomeLayout>

      <ProductsLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={1}
      ></ProductsLayout>

      <ProductLayout
        ref={auxRef}
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={2}
      ></ProductLayout>

      <ShoppingCartLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={3}
      ></ShoppingCartLayout>

      <ConfirmationLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={4}
      ></ConfirmationLayout>

      <StatusLayout
        setNavegationSelected={setNavegationSelected}
        navegationItems={navegationItems}
        idPage={5}
      ></StatusLayout>

    </div>
  );

}



export default Restaurant