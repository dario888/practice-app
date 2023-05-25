import React, { useState } from "react";
import { IDropDownBtnProps } from "./types";
import styles from "./DropDownBtn.module.css";

const DropDownBtn = ({
  content,
  btnName,
  onClickItemCB,
}: IDropDownBtnProps) => {
  const [btnDisplay, setBtnDisplay] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        disabled={content.length === 0}
        className={styles.dropdownBtn}
        onClick={() => {
          if (content.length) setBtnDisplay(!btnDisplay);
        }}
      >
        {btnName}
      </button>
      <div
        className={styles.dropdownContent}
        style={{ display: btnDisplay ? "block" : "none" }}
      >
        {content.map((item, i) => (
          <p
            key={i}
            className={styles.contentItems}
            onClick={() => {
              onClickItemCB(item.value);
              setBtnDisplay(false);
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DropDownBtn;
