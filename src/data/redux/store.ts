import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/restaurant/productsSlice";
import ordersReducer from "./slices/restaurant/ordersSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        orders: ordersReducer
    }
});

export default store;