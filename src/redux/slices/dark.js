import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: ""
}

export const darkSlice = createSlice({
    name: "dark",
    initialState,
    reducers: {
        saveDark : (state, action) => action.payload,
    }
});

export const {saveDark} = darkSlice.actions;

export default darkSlice.reducer;