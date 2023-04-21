import React, { useState } from "react";
import { Input, Button } from "../../components/common";
import styles from "./Register.module.css";
import { IRegisterInput, TRegisterErrorKeys, TRegisterKeys } from "./types";
import { inputDataArr } from "../../utils";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const [error, setError] = useState({
    usernameErr: "",
    emailErr: "",
    passwordErr: "",
    checkPasswordErr: "",
  });

  return (
    <div className={styles.registerContainer}>
      <div className={styles.title}>
        <h2>Registar to Rick & Morty</h2>
      </div>
      <form className={styles.registerForm}>
        {inputDataArr.map((input) => (
          <Input
            inputType={input.inputType}
            inputName={input.inputName}
            inputValue={user[input.inputName as TRegisterKeys]}
            labelName={input.labelName}
            errorMsg={error[input.errorKey as TRegisterErrorKeys]}
            onChangeCB={() => {}}
          />
        ))}

        <Button
          styleBtn={styles.registerBtn}
          textBtn="REGISTER"
          onClickCB={() => {}}
        />
      </form>
    </div>
  );
};

export default RegisterPage;
