import React, { useEffect, useState } from "react";
import styles from "./ScrollToTopBtn.module.css";

//

export const ScrollToTopBtn = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const handleVisibleButton = () => {
    setShowScrollBtn(window.pageYOffset > 800);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <button
      type="button"
      className={showScrollBtn ? styles.scrollBtn : styles.scrollBtnHidden}
      onClick={handleScrollUp}
    >
      <img
        src="https://img.icons8.com/bubbles/100/long-arrow-up.png"
        alt="long-arrow-up"
      />
    </button>
  );
};
