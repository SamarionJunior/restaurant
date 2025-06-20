/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/global/classes.scss"
import "../../css/Templates/restaurant.scss"
import "../../css/components/header.scss"

import forkandknife from "../../assets/logo/forkandknife.png"

import { useEffect, useRef, type FunctionComponent, type RefObject } from "react";
import { Head, Header } from "../components/components.tsx";
import type { PropsNavagetion } from "../../typescript/props.ts";
import { toLink } from "../../typescript/functions.ts";
import type { CompanyType, StateType } from "../../typescript/types.ts"
import { useSelector } from "react-redux"

const HeaderLayout: FunctionComponent<any> = (props: PropsNavagetion) => {

  const idPageDefault = props.idPageDefault;

  const h1Ref: RefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement | null>(null);

  const companyInformation: CompanyType = useSelector((state: StateType): CompanyType => state.company);

  const handleToHome = (e: any) => {
    toLink(e, props.navegationItems[idPageDefault].id);
    props.setNavegationSelected(props.navegationItems[idPageDefault]);
  }

  useEffect(() => {
    if(h1Ref != null && h1Ref.current != null){
      h1Ref.current.addEventListener("click", handleToHome);
    }
  }, [h1Ref]);

  return (
    <Header className="Header">
      <Head className="Head">
        {/* <i>
          <FaHome />
        </i> */}
        <button className="Button" onClick={handleToHome}>
          <img className="Img" src={forkandknife} alt="" />
        </button>
        <h1 className="H1" ref={h1Ref}>{companyInformation.name}</h1>
      </Head>
      {props?.children}
    </Header>
  );
}

export default HeaderLayout;