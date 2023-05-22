export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginError {
  passwordErr: string;
  emailErr: string;
}

export type TLoginKeys = keyof ILoginInput;

export type TLoginErrorKeys = keyof ILoginError;
