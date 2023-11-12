import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";
import { TOAST_MESSAGES } from "../../../utils";
import { IToastMsg, IToastProps } from "./types";

export const Toast = ({ toast, toastDescription }: IToastProps) => {
  const [toastMsg, setToastMsg] = useState<IToastMsg>();

  useEffect(() => {
    if (toast) {
      setToastMsg(TOAST_MESSAGES.find((t) => t.title === toast));
    }
  }, [toast]);

  return (
    <div className={`${styles.notificationContainer} ${styles.topRight}`}>
      <div
        className={`${styles.notification} ${styles.toast} ${styles.topRight}`}
        style={{ backgroundColor: toastMsg?.backgroundColor }}
      >
        <button>X</button>
        <div className={styles.notificationImage}>
          <img src={toastMsg?.icon} alt="toast-img" />
        </div>
        <div>
          <p className={styles.notificationTitle}>{toastMsg?.title}</p>
          <p className={styles.notificationMessage}>{toastDescription}</p>
        </div>
      </div>
    </div>
  );
};
