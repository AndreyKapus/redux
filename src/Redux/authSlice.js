import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        isLogedIn: false,
    },

    reducers: {
        login(state, action) {
            state.login = action.payload;
            state.isLogedIn = true;
        },

        logOut(state, action) {
            state.login = '';
            state.isLogedIn = false;
        }
    }
})

export const {login, logout} = authSlice.actions