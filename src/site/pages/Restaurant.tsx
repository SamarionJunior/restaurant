/// CSS ///

import "../../css/pre-sets.scss"
import "../../css/restaurant.scss"

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

const NavegationTemplate: FunctionComponent<any> = _ => {

  const [items, setItems] = useState(NavegationItems);

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

  return (
    <Navegation className={""}>
      {show ? items?.map((item: any) => (
        <NavegationItem className="navegation-item" key={item}>
          <Text className="navegation-item-text">
            {item}
          </Text>
        </NavegationItem>
      )) : null}
    </Navegation>
  );
}

const Restaurant: FunctionComponent<any> = () => {

  const [productsOrigin, ] = useState(getAllProducts());

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(updateProducts(productsOrigin));
  }, []);

  return (

    <div id="store">

      <NavegationTemplate></NavegationTemplate>

      <hr/>
      <ProductsLayout></ProductsLayout>

      <hr/>
      <ProductLayout></ProductLayout>

      <hr/>
      <ShoppingCartLayout></ShoppingCartLayout>

      <hr/>
      <ConfirmationLayout></ConfirmationLayout>

      <hr/>
      <StatusLayout></StatusLayout>

    </div>
  );

}

export default Restaurant