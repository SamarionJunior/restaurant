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
import NavegationTemplate from "../layout/Navegation.tsx";

const Restaurant: FunctionComponent<any> = () => {

  const [navegationItems, setNavegationItems] = useState<string[]>(NavegationItems);
  const [navegationSelected, setNavegationSelected] = useState<string>(navegationItems[0]);
  const [CurretPage, setCurrentPage] = useState<FunctionComponent<any>>(() => ProductsLayout);

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

    </div>
  );

}



export default Restaurant