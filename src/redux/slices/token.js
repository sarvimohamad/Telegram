import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: {
        token : "",
        token_type : "",
        expire_at : ""
    }
}

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        saveToken : (state, action) => action.payload,
    }
});

export const {saveToken} = tokenSlice.actions;

export default tokenSlice.reducer;