import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import blogReducer from './blogSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        blog: blogReducer,
    }
});

export default store;