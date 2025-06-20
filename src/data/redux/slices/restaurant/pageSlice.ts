import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "Restaurant";

const pageSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    updatePage: (_ , action) => {
      return action.payload;
    }
  }
});

export const {updatePage} = pageSlice.actions;
export default pageSlice.reducer;