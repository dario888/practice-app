import React from "react";
import { IInputProps } from "./types";
import styles from "./Input.module.css";

export const Input = ({
  inputType,
  labelName,
  onChangeCB,
  inputName,
  inputValue,
  errorMsg,
}: IInputProps) => {
  return (
    <div className={styles.inputMainDiv}>
      <label className={styles.inputLabel}>{labelName}</label>
      <input
        onChange={onChangeCB}
        className={styles.inputField}
        type={inputType}
        name={inputName}
        value={inputValue}
      />
      <div className={styles.errorMsg}>{errorMsg}</div>
    </div>
  );
};
