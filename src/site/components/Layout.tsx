/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Layouts/Layout.scss"
/// IMAGE ///
import {  type FunctionComponent } from "react";
/// TYPESCRIPT ///
import type { PropsLayout, PropsPages } from "../../typescript/props.ts";
import { Content, Layout, Space } from "./components.tsx";


const LayoutLayout: FunctionComponent<any> = (props: PropsLayout) => {

  // if(productsFiltered.length == 0){
  //   return (<div>Nenhum Produto no Cardápio!</div>);
  // }

  return (
    <Layout id={props.id} className={"Tab Layout " + props.className}>
      <Space className="Space"></Space>
      <Content className="Content">
        {props.children}
      </Content>
      <Space className="Space"></Space>
    </Layout>
  );

}

export default LayoutLayout;