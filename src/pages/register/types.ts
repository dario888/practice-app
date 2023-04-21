export interface IRegisterInput {
  username: string;
  email: string;
  password: string;
  checkPassword: string;
}

export interface IRegisterError {
  usernameErr: string;
  emailErr: string;
  passwordErr: string;
  checkPasswordErr: string;
}

export type TRegisterKeys = keyof IRegisterInput;

export type TRegisterErrorKeys = keyof IRegisterError;
