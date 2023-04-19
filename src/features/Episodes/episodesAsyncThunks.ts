import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllEpisodes = createAsyncThunk(
  "getAllEpisodes",
  async (_, thunkAPI) => {
    try {
      const res = await axios("TODO");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getEpisode = createAsyncThunk(
  "getEpisode",
  async (_, thunkAPI) => {
    try {
      const res = await axios("TODO");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
