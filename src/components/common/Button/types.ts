import { TButtonType, TVoidFunc } from "../../../utils";

export interface IButtonProps {
  typeBtn?: TButtonType;
  onClickCB: TVoidFunc;
  styleBtn: string;
  textBtn: string;
}
