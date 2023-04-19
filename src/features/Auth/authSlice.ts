import { createSlice } from "@reduxjs/toolkit";
import { getUser, registerUser } from "./authAsyncThunks";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../../utils";

const initialState = {
  isUserLoading: true,
  errorAuth: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {})
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
