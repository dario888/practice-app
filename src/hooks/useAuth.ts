import { useNavigate } from "react-router-dom";
import { STORAGE_KEYS } from "../utils";

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
  const navigate = useNavigate();

  const authFuncs = () => {
    localStorageCB(STORAGE_KEYS.AUTH, "true");
    navigate(url);
  };

  return {
    authFuncs,
  };
};
