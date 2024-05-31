// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice=createSlice({
//     name:"user",
//     initialState:{
//         user:"null"
//     },
//     reducers:{
//         login:(state,action)=>{
//             state.user=action.payload;
//         }
//     }
// })
 
// export const {login}=userSlice.actions;

// export const selectUser=(state)=>state.user.user;

// export default userSlice.reducer;
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';

// const store = configureStore({
//     reducer: {
//         user: userReducer,
//     },
// });

// export default store;
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        loggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.token = null;
            state.loggedIn = false;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
