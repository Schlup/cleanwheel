import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    user: null,
    token: null,
    business: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.business = action.payload.business || null;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.business = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;