import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import cartSlice from "../features/cartSlice";

// create store
export const store = configureStore({
    reducer:{
        user:userSlice,
        allCart:cartSlice
    }
})