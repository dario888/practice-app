import { configureStore } from "@reduxjs/toolkit";
import { authReducer, charactersReducer, episodesReducer } from "../features";

export const store = configureStore({
  reducer: {
    authReducer,
    charactersReducer,
    episodesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const getStateFromAuthReducer = (state: RootState) => state.authReducer;
export const getStateFromCharReducer = (state: RootState) =>
  state.charactersReducer;
export const getStateFromEpisodesReducer = (state: RootState) =>
  state.episodesReducer;

export type AppDispatch = typeof store.dispatch;
