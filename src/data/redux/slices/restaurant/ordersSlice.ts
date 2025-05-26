import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: "orders",
    initialState: [],
    reducers: {
        updateOrders: (state, action) => {
            return action.payload
        },
        addOrder: (state, action) => {
            const newState = [{
                ...action.payload
            }, ...state]
            return newState;
        }
    }
});

export const {updateOrders, addOrder} = ordersSlice.actions;
export default ordersSlice.reducer;