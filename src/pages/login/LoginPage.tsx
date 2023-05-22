import React from "react";
import { Button, Input } from "../../components";
import styles from "./Login.module.css";
import isEmpty from "lodash.isempty";
import { loginUser } from "../../features";
import { useAppDispatch, useAuth, useFormFields } from "../../hooks";
import { inputLoginArr, loginValidation, setToLocalStorage } from "../../utils";
import { ILoginError, ILoginInput, TLoginErrorKeys, TLoginKeys } from "./types";

const LoginPage = () => {
  const {
    formValues: user,
    handleInputChange,
    handleSubmit,
    errors,
  } = useFormFields<ILoginInput, ILoginError>({
    onSubmitCB: onSubmitForm,
    initialState: {
      email: "",
      password: "",
    },
    initialErrors: {
      emailErr: "",
      passwordErr: "",
    },
    validate: loginValidation,
  });
  const { authFuncs } = useAuth({
    localStorageCB: setToLocalStorage,
    url: "/home",
    isAuth: true,
  });
  const dispatch = useAppDispatch();

  function onSubmitForm() {
    dispatch(loginUser({ email: user.email, authFuncs }));
  }

  const handleErros = (input: {
    inputType: string;
    inputName: string;
    labelName: string;
    errorKey: string;
  }) => {
    return isEmpty(errors)
      ? ""
      : (errors as ILoginError)[input.errorKey as TLoginErrorKeys];
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.title}>
        <h2>Login to Rick & Morty</h2>
      </div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        {inputLoginArr.map((input) => (
          <Input
            key={input.inputName}
            inputType={input.inputType}
            inputName={input.inputName}
            inputValue={user[input.inputName as TLoginKeys]}
            labelName={input.labelName}
            errorMsg={handleErros(input)}
            onChangeCB={handleInputChange}
          />
        ))}

        <Button styleBtn={styles.loginBtn} textBtn="LOGIN" typeBtn="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
