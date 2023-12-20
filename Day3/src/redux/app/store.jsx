import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import userSlice from "../features/userSlice";

// create store
export const store = configureStore({
    reducer:{
        user:userSlice,
        allCart:cartSlice
    }
})