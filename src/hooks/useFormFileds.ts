import { useEffect, useState } from "react";
import { TOnChangeInputEvent, TOnSubmitFormEvent } from "../utils";

interface IUseFormFiledParams<T1, K1> {
  initialState: T1;
  initialErrors: K1 | {};
  onSubmitCB: () => void;
  validate?: (values: T1) => K1;
}

export const useFormFields = <T, K extends {}>({
  initialState,
  initialErrors,
  onSubmitCB,
  validate,
}: IUseFormFiledParams<T, K>) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  const handleInputChange = (e: TOnChangeInputEvent) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: TOnSubmitFormEvent) => {
    if (event) event.preventDefault();
    if (typeof validate === "function") {
      setErrors(validate(formValues));
    } else {
      setErrors({});
    }
    console.log("CUSTOM HOOK CHANGE");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      onSubmitCB();
    }
    // eslint-disable-next-line
  }, [errors]);

  return { formValues, handleInputChange, handleSubmit, errors };
};
