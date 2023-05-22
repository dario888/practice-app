import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAsyncThunks";
import {
  STORAGE_KEYS,
  getFromLocalStorage,
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../../utils";
import { IUser } from "./types";

const initialState = {
  user: {} as IUser | undefined,
  isAuthenticated: !!(getFromLocalStorage(STORAGE_KEYS.AUTH) as string),
  isUserLoading: true,
  errorAuth: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isUserLoading = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isUserLoading = false;
      })
      .addMatcher(isPendingAction, (state) => {
        state.isUserLoading = true;
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.isUserLoading = false;
        state.errorAuth = "";
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isUserLoading = false;
        state.errorAuth = action.payload || "";
      });
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export const authReducer = authSlice.reducer;
