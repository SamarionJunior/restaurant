import { createSlice } from "@reduxjs/toolkit";
import type { CompanyType } from "../../../../typescript/types";

const initialState: CompanyType = {
  name: "Restuarant",
  slogan: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  endereco: "Rua 25 de Março, São Paulo, São Paulo."
}

const companySlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    updateCompany: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        slogan: action.payload.slogan,
        endereco: action.payload.endereco
      }
    }
  }
});

export const {updateCompany} = companySlice.actions;
export default companySlice.reducer;