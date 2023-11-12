import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosData } from "../../axois";

export const getAllCharacters = createAsyncThunk(
  "getAllCharacters",
  async (_, thunkAPI) => {
    try {
      const res = await axiosData("/characters");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getSearchCharacters = createAsyncThunk(
  "getSearchCharacters",
  async (query: string, thunkAPI) => {
    try {
      const res = await axiosData(`/characters?name_like=${query}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getPaginatedCharacters = createAsyncThunk(
  "getPaginatedCharacters",
  async (page: number, thunkAPI) => {
    try {
      const res = await axiosData(`/characters?_page=${page}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getCharacter = createAsyncThunk(
  "getCharacter",
  async (id: number, thunkAPI) => {
    try {
      const res = await axiosData(`/characters/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
