import { Input, Button } from "../../components/common";
import styles from "./Register.module.css";
import {
  IRegisterError,
  IRegisterInput,
  TRegisterErrorKeys,
  TRegisterKeys,
} from "./types";
import {
  inputDataArr,
  registerValidation,
  setToLocalStorage,
} from "../../utils";
import { useAppDispatch, useFormFields } from "../../hooks";
import isEmpty from "lodash.isempty";
import { registerUser } from "../../features";
import { useAuth } from "../../hooks";

const RegisterPage = () => {
  const {
    formValues: user,
    handleInputChange,
    handleSubmit,
    errors,
  } = useFormFields<IRegisterInput, IRegisterError>({
    onSubmitCB: onSubmitForm,
    initialState: {
      username: "",
      email: "",
      password: "",
      checkPassword: "",
    },
    initialErrors: {
      usernameErr: "",
      emailErr: "",
      passwordErr: "",
      checkPasswordErr: "",
    },
    validate: registerValidation,
  });
  const { authFuncs } = useAuth({
    localStorageCB: setToLocalStorage,
    url: "/home",
    isAuth: true,
  });
  const dispatch = useAppDispatch();

  function onSubmitForm() {
    dispatch(registerUser({ user, authFuncs }));
  }

  const handleErros = (input: {
    inputType: string;
    inputName: string;
    labelName: string;
    errorKey: string;
  }) => {
    return isEmpty(errors)
      ? ""
      : (errors as IRegisterError)[input.errorKey as TRegisterErrorKeys];
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.title}>
        <h2>Registar to Rick & Morty</h2>
      </div>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        {inputDataArr.map((input) => (
          <Input
            key={input.inputName}
            inputType={input.inputType}
            inputName={input.inputName}
            inputValue={user[input.inputName as TRegisterKeys]}
            labelName={input.labelName}
            errorMsg={handleErros(input)}
            onChangeCB={handleInputChange}
          />
        ))}

        <Button
          styleBtn={styles.registerBtn}
          textBtn="REGISTER"
          typeBtn="submit"
        />
      </form>
    </div>
  );
};

export default RegisterPage;
