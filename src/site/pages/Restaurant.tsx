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
import { getAllProducts } from "../../typescript/functions.ts";
import { NavegationItems } from "../../typescript/Variables.ts";

import ShoppingCartLayout from "../layout/ShoppingCart.tsx";
import ConfirmationLayout from "../layout/Confirmation.tsx";
import StatusLayout from "../layout/Status.tsx";
import NavegationTemplate from "../layout/Navegation.tsx";
import ProductsLayout from "../layout/Products.tsx";
import ProductLayout from "../layout/Product.tsx";
import HomeLayout from "../layout/Home.tsx";
import HeaderLayout from "../layout/Header.tsx";
import type { NavegationItemType } from "../../typescript/types.ts";

const Restaurant: FunctionComponent<any> = () => {

  const [navegationItems, ] = useState<NavegationItemType[]>(NavegationItems);
  const [navegationSelected, setNavegationSelected] = useState<NavegationItemType>(navegationItems[0]);
  const [CurretPage, setCurrentPage] = useState<FunctionComponent<any>>(() => ProductsLayout);

  const [productsOrigin, ] = useState(getAllProducts());

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(updateProducts(productsOrigin));
  }, []);

  useEffect(() => {

    switch (navegationSelected.menu) {
      case navegationItems[0].menu:
        setCurrentPage(() => HomeLayout);
        break;
      case navegationItems[1].menu:
        setCurrentPage(() => ProductsLayout);
        break;
      case navegationItems[2].menu:
        setCurrentPage(() => ProductLayout);
        break;
      case navegationItems[3].menu:
        setCurrentPage(() => ShoppingCartLayout);
        break;
      case navegationItems[4].menu:
        setCurrentPage(() => ConfirmationLayout);
        break;
      case navegationItems[5].menu:
        setCurrentPage(() => StatusLayout);
        break;
    }

  }, [navegationSelected]);

  return (

    <div id="Restaurant" className="Restaurant">

      <HeaderLayout setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}>
        <NavegationTemplate setNavegationSelected={setNavegationSelected} navegationItems={navegationItems} navegationSelected={navegationSelected}></NavegationTemplate>
      </HeaderLayout>

      <HomeLayout setNavegationSelected={setNavegationSelected} navegationItems={navegationItems}></HomeLayout>

      <ProductsLayout setNavegationSelected={setNavegationSelected} navegationItems={navegationItems}></ProductsLayout>

      <ProductLayout setNavegationSelected={setNavegationSelected} navegationItems={navegationItems}></ProductLayout>

      <ShoppingCartLayout setNavegationSelected={setNavegationSelected} navegationItems={navegationItems}></ShoppingCartLayout>

      <ConfirmationLayout setNavegationSelected={setNavegationSelected} navegationItems={navegationItems}></ConfirmationLayout>

      <StatusLayout setNavegationSelected={setNavegationSelected} navegationItems={navegationItems}></StatusLayout>

    </div>
  );

}



export default Restaurant