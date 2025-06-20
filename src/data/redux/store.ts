import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/restaurant/productsSlice";
import ordersReducer from "./slices/restaurant/ordersSlice";
import companyReducer from "./slices/restaurant/companySlice";
import pageReducer from "./slices/restaurant/pageSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        orders: ordersReducer,
        company: companyReducer,
        page: pageReducer
    }
});

export default store;