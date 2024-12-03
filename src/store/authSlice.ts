import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../api/authApiCalls";
import { AuthState, LoginCredentials } from "../types/authTypes";

const initialState: AuthState = {
    isAuth: false,
    userRole: null,
    userID: null,
    error: null,
    isLoading: false,
};

export const login = createAsyncThunk("auth/login", 
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
            const data = await loginUser(credentials);
            return { userID: data._uuid, role: data.role}
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.isAuth = false;
            state.userRole = null;
            state.userID = null;
            state.userRole = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.userID = action.payload.userID;
            state.userRole = action.payload.role;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;