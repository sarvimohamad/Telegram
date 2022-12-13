import { configureStore } from "@reduxjs/toolkit";
import { mobileSlice } from "./slices/mobile";
import { tokenSlice } from "./slices/token";
import { darkSlice } from "./slices/dark";
import { userSlice } from "./slices/user";

export const store = configureStore({
    reducer : {
        mobile : mobileSlice.reducer,
        token : tokenSlice.reducer,
        dark : darkSlice.reducer,
        user : userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})