import validator from "validator";
import { ILoginError, ILoginInput } from "../pages/login/types";
import { IRegisterError, IRegisterInput } from "../pages/register/types";

export const loginValidation = (val: ILoginInput): ILoginError => {
  const loginError = {} as ILoginError;

  if (!validator.isEmail(val.email)) {
    loginError.emailErr = "Inavild Email!";
  }

  if (val?.password?.length < 6) {
    loginError.passwordErr = "Password should be min 6 characters!";
  }

  return loginError;
};

export const registerValidation = (val: IRegisterInput): IRegisterError => {
  const registerError = {} as IRegisterError;

  if (val?.username?.length < 5) {
    registerError.usernameErr = "Username min 5 characters!";
  }

  if (!validator.isEmail(val.email)) {
    registerError.emailErr = "Inavild Email!";
  }

  if (val?.password?.length < 6) {
    registerError.passwordErr = "Password should be min 6 characters!";
  }

  if (val?.checkPassword?.length < 6) {
    registerError.checkPasswordErr =
      "Check Password should be min 6 characters!";
  }

  if (val?.checkPassword !== val?.password) {
    registerError.checkPasswordErr = "Passwords do not match!";
  }

  return registerError;
};
