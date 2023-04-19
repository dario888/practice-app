import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCharacters = createAsyncThunk(
  "getAllCharacters",
  async (_, thunkAPI) => {
    try {
      const res = await axios("TODO");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getCharacter = createAsyncThunk(
  "getCharacter",
  async (_, thunkAPI) => {
    try {
      const res = await axios("TODO");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
