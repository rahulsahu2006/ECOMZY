import { configureStore } from "@reduxjs/toolkit";
import cartSlicereducer from "./cartSlice"

export const store = configureStore({
    reducer:{
        cart: cartSlicereducer,
    }
});