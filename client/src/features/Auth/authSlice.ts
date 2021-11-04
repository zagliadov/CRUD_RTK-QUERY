import dotenv from 'dotenv';
import { createSlice } from '@reduxjs/toolkit';

dotenv.config();

interface IUser {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    role?: string;
}

interface IUserState {
    user: IUser,
    status: string,
    token: string,
}

const initialState: IUserState = {
    user: {},
    status: '',
    token: '',
}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveToken(state, action) {
            localStorage.setItem('token', action.payload);
            state.token = action.payload;
        },
        removeToken(state, action) {
            state.token = action.payload;
        },
        saveUser(state, action) {
            state.user = action.payload;
        },
        removeUser(state, action) {
            state.user = action.payload;
        },
    },

    extraReducers: (builder) => {
        // builder
        // .addCase(authApi.endpoints.login.pending, (state) => { state.status = 'loading'; })
        // .addCase(authApi.login.fulfilled, (state, { payload }) => {

        // })
        // .addCase(authApi.login.rejected, () => { });
        ///////

    }
});

export const { saveToken, saveUser, removeUser, removeToken } = authSlice.actions;





export default authSlice.reducer;