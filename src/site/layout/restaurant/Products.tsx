/// CSS ///
import "../../../css/global/pre-sets.scss"
import "../../../css/global/classes.scss"
import "../../../css/Layouts/Products.scss"
/// IMAGE ///
import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductShow } from "../../../data/redux/slices/restaurant/productsSlice.ts";
/// TYPESCRIPT ///
import { arrayIsEmpty, toLink } from "../../../typescript/functions.ts";
import type { PropsPages } from "../../../typescript/props.ts";
import type { ProductType, StateType } from "../../../typescript/types.ts";
import { Contents } from "../../../typescript/content.ts";
import Warning from "../../templates/Warning.tsx";
import KeyValue from "../../templates/KeyValue.tsx";
import Data from "../../components/Data.tsx";
import ProductHorizontal from "../../templates/ProductHorizontal.tsx";
import LayoutLayout from "../../templates/Layout.tsx";

const toFilterByGreaterThan = <T,>(items: T[] | any[], proprity: string, value: number) : T[] | any[] => items.filter((item: T | any) : boolean => item[proprity] > value);
const getAvailableProducts = (products: ProductType[]) : ProductType[] => toFilterByGreaterThan<ProductType>(products, "count", 0);

// (item: ProductType) : boolean => item.count > 0)

const idTSX: string = "b";

const classNameLayoutDefault: string = "Store";
const classNameBackgroundLayout: string = "bg-1";

const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;

const classNameNoItems: string = "NoItems";

const WarningProducts: FunctionComponent<any> = () => (<Warning id={idTSX} className={`${classNameTSX} ${classNameNoItems}`} message={"Nenhum Produto no Cardápio!"}></Warning>);

const ProductsLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;
  const idPage = props.idPage;

  const dispatch = useDispatch();

  const products: ProductType[] = useSelector((state: StateType) : ProductType[] =>  state.products);
  
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>(getAvailableProducts(products));

  const [show, setShow] = useState<boolean>(false);

  useEffect(() : void => {
    !arrayIsEmpty(products) ? setShow(true) : setShow(false);
    setProductsFiltered(getAvailableProducts(products));
  }, [products]);

  const handleShow = (e: any, index: number) : void => {
    if(index >= 0){
      dispatch(updateProductShow(index));
      toLink(e, navegationItems[(idPage + 1)].id);
      setNavegationSelected(navegationItems[(idPage + 1)]);
    }
  }

  if(productsFiltered.length == 0){
    return (
      <WarningProducts></WarningProducts>
    );
  }

  return (
    <LayoutLayout id="b" className="Store bg-1">
        {show ? productsFiltered.map((product: ProductType) => (
          <ProductHorizontal
            key={product.key}

            className="Product-Horizontal"
            product={product}
            onClick={(e: any) => handleShow(e, product.index)}

            Data={
              <Data className="Data">
                <KeyValue 
                  keyName={`${Contents.Labels.Price}: `}
                  value={`${product.price} `}
                />
                <KeyValue 
                  keyName={`${Contents.Labels.Count}: `}
                  value={`${product.count} `}
                />
              </Data>
            }
          />
        )) : null}
    </LayoutLayout>
  );
}

export default ProductsLayout;

{/* <Product className="Product-Horizontal" key={product.key} onClick={(e: any) => handleShow(e, product.index)}>
  <ImageDiv className="Image" srcName={product.image}/>
  <Information className="Information">
    <Title className="Title" text={product.name}/>
    <Description className="Description" text={product.description}/>
    <Data className="Data">
      <KeyValue 
        keyName={`${Contents.Labels.Price}: `}
        value={`${product.price} `}
      />
      <KeyValue 
        keyName={`${Contents.Labels.Count}: `}
        value={`${product.count} `}
      />
    </Data>
  </Information>
</Product> */}