export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginError {
  passwordErr: string;
  emailErr: string;
}
