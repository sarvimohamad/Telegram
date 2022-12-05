import { configureStore } from "@reduxjs/toolkit";
import { mobileSlice } from "./slices/mobile";
import { tokenSlice } from "./slices/token";
import { darkSlice } from "./slices/dark";

export const store = configureStore({
    reducer : {
        mobile : mobileSlice.reducer,
        token : tokenSlice.reducer,
        dark : darkSlice.reducer
    }
})