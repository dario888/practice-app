import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

export const Navbar = () => {
  const [burgerBarClick, setBurgerBarClass] = useState("barUnClicked");
  const [sideMenuClass, setSideMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerBarClass("barClicked");
      setSideMenuClass("visible");
    } else {
      setBurgerBarClass("barUnClicked");
      setSideMenuClass("hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <input type="checkbox" id="toggle" />
      <nav className={styles.navConainter}>
        <div>
          <Link to={true ? "/home" : "/"} className={styles.linkLogoImg}>
            <img
              src="https://img.icons8.com/plasticine/100/null/rick-sanchez.png"
              alt="LogoImg"
            />
          </Link>
        </div>
        <div className={styles.divLinksList}>
          <NavigationLinks />
        </div>
        {/* BURGER MENU */}
        <label
          className={styles.burgerMenu}
          onClick={updateMenu}
          htmlFor="toggle"
        >
          <div
            className={`${styles.burgerBar} ${styles[burgerBarClick]}`}
          ></div>
          <div
            className={`${styles.burgerBar} ${styles[burgerBarClick]}`}
          ></div>
          <div
            className={`${styles.burgerBar} ${styles[burgerBarClick]}`}
          ></div>
        </label>
      </nav>
      <div className={`${styles.sideMenu} ${styles[sideMenuClass]}`}>
        <div className={styles.sideMenuLinkList}>
          <NavigationLinks />
        </div>
      </div>
    </div>
  );
};
