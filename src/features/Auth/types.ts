import { NavigateFunction } from "react-router-dom";
export interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;
}

export interface ILoginUserParams {
  id: number;
  authFuncs: () => void;
}
export interface IRegisterUserParams {
  user: IUser;
  navigate?: NavigateFunction;
  authFuncs: () => void;
}
