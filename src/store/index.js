import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    admin:[{
        id: 1,
        name: "firas",
        email: "firas@test.com",
        password: "azertyazerty",
        role:"admin"
    }],
    isLoggedIn: false,
    mode: "light",
    user: null,
    token: null,
    editor: null,
    posts: [],
};
const authSlice = createSlice({
    name: "authuser",
    initialState,
    reducers: {
        /*setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },*/
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