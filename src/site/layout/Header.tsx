/// CSS ///
import "../../css/global/pre-sets.scss"
import "../../css/Templates/restaurant.scss"
import "../../css/components/header.scss"

import forkandknife from "../../assets/logo/forkandknife.png"

import { useEffect, useState, type FunctionComponent, type ReactNode } from "react";
import { Head, Header, Navegation, NavegationItem } from "../components/components.tsx";
import type { PropsNavagetion } from "../../typescript/props.ts";
import { FaHome } from "react-icons/fa";

const HeaderLayout: FunctionComponent<any> = (props: PropsNavagetion) => {

  return (
    <Header className="Header">
      <Head className="Head">
        {/* <i>
          <FaHome />
        </i> */}
        <button className="Button">
          <img className="Img" src={forkandknife} alt="" />
        </button>
        <h1 className="H1">Restuarant</h1>
      </Head>
      {props?.children}
    </Header>
  );
}

export default HeaderLayout;