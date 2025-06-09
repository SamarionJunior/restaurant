import type { ReactNode } from "react";
import type { NavegationItemType } from "./types";

export type PropsPages = {
  setNavegationSelected: React.Dispatch<React.SetStateAction<string>>;
  navegationItems: string[];
}

export type PropsNavagetion = {
  setNavegationSelected: React.Dispatch<React.SetStateAction<NavegationItemType>>;
  navegationItems: NavegationItemType[];
  navegationSelected: NavegationItemType;
  children?: ReactNode;
}