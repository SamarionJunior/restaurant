
/// REACT ///
import { type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import type { StateType } from "../../typescript/types";
import Restaurant from "../pages/Restaurant";
import Admin from "../pages/Admin";
/// TYPESCRIPT ///

export const Routes: FunctionComponent<any> = _ => {
  const page: string = useSelector((state: StateType): string => state.page);

  switch(page){
    case "Restaurant":
      return <Restaurant/>; 
    case "Admin":
      return <Admin/>; 
    default:
      return <Restaurant/>; 
  }
}

export default Routes;