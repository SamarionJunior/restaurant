import { createSlice } from "@reduxjs/toolkit";
import type { Order } from "../../../../typescript/types";

const initialState: Order[] = [];

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
        }
    }
});

export const {updateOrders, addOrder} = ordersSlice.actions;
export default ordersSlice.reducer;