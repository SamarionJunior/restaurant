import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../../../typescript/types";
import { getAllProducts } from "../../../../typescript/functions";

const initialState: ProductType[] = getAllProducts();

const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        updateProducts: ( _ , action) => {
            return action.payload
        },
        addProduct: (state, action) => {
            state.unshift(action.payload);
            return state;
        },
        deleteProduct: (state, action) => {
            return state.filter(
                product => 
                    product.index != action.payload
            );
        },
        updateProduct: (state, action) => {
            // console.log(action.payload);
            return state.map(
                product => 
                    product.index == action.payload.index ? {
                        ...product,
                        ...action.payload
                    } : product
            );
        },
        updateProductShow: (state, action) => {
            return state.map(
                product => 
                    product.index == action.payload ? {
                        ...product,
                        show: true
                    } : {
                        ...product,
                        show: false
                    }
            );
            // console.log(action.payload.index);
            // console.log(newState);
            // return newState;
        }
    }
});

export const {updateProducts, addProduct, deleteProduct, updateProduct, updateProductShow} = productsSlice.actions;
export default productsSlice.reducer;