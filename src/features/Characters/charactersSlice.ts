import { createSlice } from "@reduxjs/toolkit";
import {
  getCharacter,
  getAllCharacters,
  getPaginatedCharacters,
  getSearchCharacters,
} from "./charactersAsyncThunks";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../../utils";
import { ICharacter } from "./types";

const initialState = {
  character: ({} as ICharacter) || undefined,
  charactersList: ([] as ICharacter[]) || undefined,
  charPage: 1,
  isCharLoading: true,
  errorChar: "",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharPage: (state) => {
      state.charPage += 1;
    },
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacter.fulfilled, (state, action) => {
        state.character = action.payload;
        state.isCharLoading = false;
      })
      .addCase(getSearchCharacters.fulfilled, (state, action) => {
        state.charactersList = action.payload;
        state.isCharLoading = false;
      })
      .addCase(getPaginatedCharacters.fulfilled, (state, action) => {
        state.charactersList = [
          ...state.charactersList,
          ...action.payload,
        ].filter((x, i, arr) => i === arr.findIndex((c) => x.id === c.id));

        state.isCharLoading = false;
      })
      .addCase(getAllCharacters.fulfilled, (state, action) => {
        state.charactersList = action.payload;
        state.isCharLoading = false;
      })
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

export const { setCharPage, setCharacter } = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
