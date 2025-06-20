/// CSS ///
import "../../../css/global/pre-sets.scss";
import "../../../css/global/classes.scss";
import "../../../css/global/components.scss";
import "../../../css/Layouts/Confirmation.scss";

import { useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../data/redux/slices/restaurant/productsSlice.ts";
import { arrayIsEmpty, converteToMoney, createProduct } from "../../../typescript/functions.ts";
import { Form, Products, SubForm } from "../../components/components.tsx";
import type { PropsPages } from "../../../typescript/props.ts";
import { Contents } from "../../../typescript/content.ts";
import type { ProductType, StateType } from "../../../typescript/types.ts";
import LayoutLayout from "../../templates/Layout.tsx";
import ProductHorizontal from "../../templates/ProductHorizontal.tsx";
import Data from "../../components/Data.tsx";
import KeyValue from "../../templates/KeyValue.tsx";
import IsEmpty from "../../templates/IsEmpty.tsx";

const MenuLayout: FunctionComponent<any> = (props: PropsPages) => {
  
  const idPageTag = props.idPageTag;

  const classNameLayoutDefault: string = "Confirmation";
  const classNameBackgroundLayout: string = "bg-4";
  const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;
  const classNameNoItems: string = "NoItems";
  const message: string = "Nenhum Produto para Atualizar!";

  const [nome, setNome] = useState<string>("nome");
  const [descricao, setDescricao] = useState<string>("descricao");
  const [preco, setPreco] = useState<number>(0);
  const [quantidade, setQuantidade] = useState<number>(0);

  const products: ProductType[] = useSelector((state: StateType) : ProductType[] => state.products);

  // const [selectedProduct, setSelectedProduct] = useState<ProductType[]>(products);

  const dispatch = useDispatch();

  const layoutIsEmpty = false;

  // useEffect(() => {
  //   setSelectedProduct(products);
  // }, [products]);

  const handleAddProduct = (): void => {
    dispatch(addProduct(createProduct({
      name: nome,
      description: descricao,
      price: preco,
      count: quantidade
    })));
  }

  return (
    <IsEmpty
      test={layoutIsEmpty}
      WarningProps={{
        id: idPageTag,
        className: `${classNameTSX} ${classNameNoItems}`,
        message: message
      }}
    >
      <LayoutLayout id={idPageTag} className="Confirmation bg-4">
        {!arrayIsEmpty(products) ? (
          <>
            <Form className="Form">
              <SubForm className="SubFrom">
                <h1 className="Title">Nome do Produto</h1>
                <input
                  className="Input-Text"
                  name="nome"
                  placeholder={"Digite o Nome do Produto"}
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </SubForm>
              <SubForm className="SubFrom">
                <h1 className="Title">Descrição do Produto</h1>
                <input
                  className="Input-Text"
                  name="descricao"
                  placeholder={"Digite o Descrição do Produto"}
                  value={descricao}
                  onChange={e => setDescricao(e.target.value)}
                />
              </SubForm>
              <SubForm className="SubFrom">
                <h1 className="Title">Preço do Produto</h1>
                <input
                  className="Input-Text"
                  type="number"
                  name="preco"
                  placeholder={"Digite o Preço do Produto"}
                  value={preco}
                  onChange={e => setPreco(parseFloat(e.target.value))}
                />
              </SubForm>
              <SubForm className="SubFrom">
                <h1 className="Title">Quantidade do Produto</h1>
                <input
                  className="Input-Text"
                  type="number"
                  name="quantidade"
                  placeholder={"Digite o Quantidade do Produto"}
                  value={quantidade}
                  onChange={e => setQuantidade(parseFloat(e.target.value))}
                />
              </SubForm>
            </Form>
            <button
              className="Button-Default-4"
              onClick={handleAddProduct}
            >
              Salvar
            </button>
            <Products className="Products">
              {products.map((product: any) => (
                <ProductHorizontal
                  key={product.key}

                  className="Product-Horizontal"
                  product={product}
                  onClick={() => {return}}

                  Data={
                    <Data className="Data">
                      <KeyValue 
                      keyName={`${Contents.Labels.Price}: `}
                      value={`${converteToMoney(product.price)} `}
                      />
                      <KeyValue 
                      keyName={`${Contents.Labels.Count}: `}
                      value={`${product.count} `}
                      />
                    </Data>
                  }
                />
              ))}
            </Products>
          </>
        ) : null}
      </LayoutLayout>
    </IsEmpty>
  );
}

export default MenuLayout;