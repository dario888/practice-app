import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export type TButtonType = "button" | "submit" | "reset";

export type TVoidFunc = () => void;

export type TInputType = HTMLInputTypeAttribute | undefined;

export type TOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => void;

export type TOnChangeInputEvent = ChangeEvent<HTMLInputElement>;
