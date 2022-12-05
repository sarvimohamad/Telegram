import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobile: ""
}

export const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        saveMobile : (state, action) => action.payload,
    }
});

export const {saveMobile} = mobileSlice.actions;

export default mobileSlice.reducer;