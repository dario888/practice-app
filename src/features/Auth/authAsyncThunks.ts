import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosData } from "../../axois";

export const getUser = createAsyncThunk("getUser", async (_, thunkAPI) => {
  try {
    const res = await axiosData.get("/users");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(" GET USER: Something went wrong");
  }
});

export const loginUser = createAsyncThunk("loginUser", async (_, thunkAPI) => {
  try {
    const res = await axios("TODO");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("something went wrong");
  }
});

export const registerUser = createAsyncThunk(
  "registerUser",
  async (_, thunkAPI) => {
    try {
      const res = await axios("TODO");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
