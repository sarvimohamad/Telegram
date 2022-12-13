import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    username:"",
    password:"",
    bio:"",
    profile_photos:""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser : (state, action) => action.payload,
    }
});

export const {saveUser} = userSlice.actions;

export default userSlice.reducer;