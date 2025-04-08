import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    business: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        business: null
    },
    reducers: {
        setUser: (state, action) => {   
            return {
                ...state,
                ...action.payload,
            };
        },
        logout: () => ({
            user: null,
            token: null,
            business: null
        })
    }
});


export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;