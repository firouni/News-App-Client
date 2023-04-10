import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    mode: "light",
    user: null,
    token: null,
    editor: null,
    posts: [],
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const authActions = authSlice.actions;

const store = configureStore({
    reducer: authSlice.reducer,
});
export default store;