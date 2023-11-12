export type TToast = "Success" | "Error" | "Info" | "Warning";

export interface IToastProps {
  toast: TToast;
  toastDescription: string;
}

export interface IToastMsg {
  id: number;
  title: string;
  backgroundColor: string;
  icon: string;
}
