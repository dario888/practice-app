import {
  ChangeEvent,
  FormEvent,
  HTMLInputTypeAttribute,
  MouseEvent,
} from "react";

export type TButtonType = "button" | "submit" | "reset";

export type TVoidFunc = () => void;

export type TInputType = HTMLInputTypeAttribute | undefined;

export type TOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => void;

export type TOnChangeInputEvent = ChangeEvent<HTMLInputElement>;

export type TOnSubmitFormEvent = FormEvent<HTMLFormElement>;

export type TOnClickBtnEvent = MouseEvent<HTMLButtonElement>;
