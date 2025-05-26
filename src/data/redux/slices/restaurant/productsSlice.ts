import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        updateProducts: (state, action) => {
            return action.payload
        },
        addProduct: (state, action) => {
            return state.unshift({
                ...action.payload
            });
        },
        deleteProduct: (state, action) => {
            return state.filter(
                todo => 
                    todo.index != action.payload
            );
        },
        updateProduct: (state, action) => {
            // console.log(action.payload);
            return state.map(
                todo => 
                    todo.index == action.payload.index ? {
                        ...action.payload
                    } : todo
            );
        },
        updateProductShow: (state, action) => {
            const newState = state.map(
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
            return newState;
        }
    }
});

export const {updateProducts, addProduct, deleteProduct, updateProduct, updateProductShow} = productsSlice.actions;
export default productsSlice.reducer;