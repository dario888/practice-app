import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, registerUser } from "./authAsyncThunks";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../../utils";
import { IUser } from "./types";

const initialState = {
  user: {} as IUser,
  isUserLoading: true,
  errorAuth: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {})
      .addCase(registerUser.fulfilled, (state, action) => {})
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

export const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
