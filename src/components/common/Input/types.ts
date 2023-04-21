import { TInputType, TOnChangeInput } from "../../../utils";

export interface IInputProps {
  inputType: TInputType;
  inputName: string;
  labelName: string;
  inputValue: string;
  errorMsg?: string;
  onChangeCB: TOnChangeInput;
}
