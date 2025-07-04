import type { ReactNode } from "react";
import type { NavegationItemType } from "./types";

export type PropsPages = {
  setNavegationSelected: React.Dispatch<React.SetStateAction<NavegationItemType>>;
  navegationItems: NavegationItemType[];
  children?: ReactNode;
  idPage: number;
  idPageTag: string;
}

export type PropsNavagetion = {
  setNavegationSelected: React.Dispatch<React.SetStateAction<NavegationItemType>>;
  navegationItems: NavegationItemType[];
  navegationSelected: NavegationItemType;
  children?: ReactNode;
  idPageDefault: number;
  className?: string;
}

export type PropsLayout = {
  setNavegationSelected: React.Dispatch<React.SetStateAction<NavegationItemType>>;
  navegationItems: NavegationItemType[];
  children: ReactNode;
  id: string;
  className: string;
}

export type PropsComponentDefault = {
  className: string;
  children: ReactNode;
};