import { useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "../features";
import { STORAGE_KEYS } from "../utils";
import { useAppDispatch } from "./reduxHooks";

export type TLocalStorageFuncs = (
  key: string,
  value: string
) => void | ((key: string) => string | null) | ((key: string) => void);

export interface IUseAuthParams {
  localStorageCB: TLocalStorageFuncs;
  url: string;
  isAuth?: boolean;
}

export const useAuth = ({
  localStorageCB,
  url,
  isAuth = false,
}: IUseAuthParams) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authFuncs = () => {
    localStorageCB(STORAGE_KEYS.AUTH, "true");
    dispatch(setIsAuthenticated(isAuth));
    navigate(url);
  };

  return {
    authFuncs,
  };
};
