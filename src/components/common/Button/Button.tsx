import React from "react";
import { IButtonProps } from "./types";

export const Button = ({
  typeBtn,
  onClickCB,
  styleBtn,
  textBtn,
}: IButtonProps) => {
  return (
    <button type={typeBtn} className={styleBtn} onClick={onClickCB}>
      {textBtn}
    </button>
  );
};
