/// CSS ///
import "../../../css/global/pre-sets.scss";
import "../../../css/global/classes.scss";
import "../../../css/Layouts/Home.scss";
/// IMAGE ///
import pizza from "../../../assets/background/pizza1.jpg";

import {  type FunctionComponent } from "react";
/// TYPESCRIPT ///
import { toLink } from "../../../typescript/functions.ts";
import type { PropsPages } from "../../../typescript/props.ts";
import { Buttons, Display, Painel, Slogan } from "../../components/components.tsx";
import LayoutLayout from "../../templates/Layout.tsx";
import type { CompanyType, StateType } from "../../../typescript/types.ts";
import { useSelector } from "react-redux";

const HomeLayout: FunctionComponent<any> = (props: PropsPages) => {

  const setNavegationSelected = props.setNavegationSelected;
  const navegationItems = props.navegationItems;
  const idPage = props.idPage;

  const companyInformation: CompanyType = useSelector((state: StateType): CompanyType => state.company);

  const handleToProducts = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    toLink(e, navegationItems[(idPage + 1)].id);
    setNavegationSelected(navegationItems[(idPage + 1)]);
  }

  // if(productsFiltered.length == 0){
  //   return (
  //     <div>Nenhum Produto no Cardápio!</div>
  //   );
  // }

  return (
    <LayoutLayout id="a" className="Home bg-0">
      <Painel className="Painel Area-A">
        <Display className="Display">
          {companyInformation.name}
        </Display>
        <Slogan className="Slogan">
          {companyInformation.slogan}
        </Slogan>
        <Buttons className="Buttons">
          <button className="Button" onClick={handleToProducts}>
            Acessar o Cardápio
          </button>
        </Buttons>
      </Painel>
      <Painel className="Painel Area-B">
        <img className="Img" src={pizza} alt="" />
      </Painel>
    </LayoutLayout>
  );
}

export default HomeLayout;