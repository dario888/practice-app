import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosData } from "../../axois";
import { ILoginUserParams, IRegisterUserParams, IUser } from "./types";

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (_, thunkAPI) => {
    try {
      const res = await axiosData.get("/users");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(" GET USER: Something went wrong");
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, authFuncs }: ILoginUserParams, thunkAPI) => {
    try {
      const users = await getAllUsersFromDB();
      authFuncs();
      return users?.find((user) => user?.email === email);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async ({ user, authFuncs }: IRegisterUserParams, thunkAPI) => {
    try {
      await axiosData.post<IUser>("/users", user);
      authFuncs();
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getAllUsersFromDB = async (): Promise<IUser[] | undefined> => {
  try {
    const res = await axiosData.get("/users");
    return res.data;
  } catch (error) {
    console.log("getUserFromDB/ERROR:", error);
  }
};
