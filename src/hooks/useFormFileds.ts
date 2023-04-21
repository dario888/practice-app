import { useState } from "react";
import { TOnChangeInputEvent } from "../utils";

export const useFormFields = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: TOnChangeInputEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleInputChange };
};
