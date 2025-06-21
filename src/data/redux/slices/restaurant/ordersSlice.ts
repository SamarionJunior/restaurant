import { createSlice } from "@reduxjs/toolkit";
import type { OrderType } from "../../../../typescript/types";

const initialState: OrderType[] = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    updateOrders: ( _ , action) => {
      return action.payload
    },
    addOrder: (state, action) => {
      // state.push()
      //  = [action.payload, ...state]
      state.unshift(action.payload);
      return state;
    },
    updateStatusOrder: (state, action) => {
      return state.map(
        order => 
          order.index == action.payload.index ? {
            ...order,
            status: action.payload.status
          } : {
            ...order
          }
      );
    }
  }
});

export const {updateOrders, addOrder, updateStatusOrder} = ordersSlice.actions;
export default ordersSlice.reducer;