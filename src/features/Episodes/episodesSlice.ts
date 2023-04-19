import { createSlice } from "@reduxjs/toolkit";
import { getAllEpisodes, getEpisode } from "./episodesAsyncThunks";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../../utils";

const initialState = {
  isEpisodeLoading: true,
  errorEpisodes: "",
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpisode.fulfilled, (state, action) => {})
      .addCase(getAllEpisodes.fulfilled, (state, action) => {})
      .addMatcher(isPendingAction, (state) => {
        state.isEpisodeLoading = true;
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.isEpisodeLoading = false;
        state.errorEpisodes = "";
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isEpisodeLoading = false;
        state.errorEpisodes = action.payload || "";
      });
  },
});

export const {} = episodesSlice.actions;

export const episodesReducer = episodesSlice.reducer;
