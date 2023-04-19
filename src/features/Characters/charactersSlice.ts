import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { getCharacter, getAllCharacters } from "./charactersAsyncThunks";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../../utils";

const initialState = {
  isCharLoading: true,
  errorChar: "",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacter.fulfilled, (state, action) => {})
      .addCase(getAllCharacters.fulfilled, (state, action) => {})
      .addMatcher(isPendingAction, (state) => {
        state.isCharLoading = true;
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.isCharLoading = false;
        state.errorChar = "";
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isCharLoading = false;
        state.errorChar = action.payload || "";
      });
  },
});

export const {} = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
