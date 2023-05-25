export interface ISlelectItem {
  id: number;
  name: string;
  value: string;
}

export interface IDropDownBtnProps {
  content: ISlelectItem[];
  btnName: string;
  onClickItemCB: (value: string) => void;
}
