import React, { Fragment, useState } from "react";
import {
  STORAGE_KEYS,
  getFromLocalStorage,
  privateLinksData,
  publicLinksData,
} from "../../utils";
import { NavLink } from "react-router-dom";
import styles from "./NavigationLinks.module.css";

const NavigationLinks = () => {
  const [isAuthenticated] = useState(getFromLocalStorage(STORAGE_KEYS.AUTH));

  return !!isAuthenticated ? (
    <Fragment>
      {" "}
      {privateLinksData.map((link) => (
        <NavLink
          key={link.linkName}
          to={link.url}
          className={({ isActive }) =>
            isActive ? styles.active : styles.linkItem
          }
        >
          {link.linkName}
        </NavLink>
      ))}
      <button className={styles.logoutBtn}>Logout</button>
    </Fragment>
  ) : (
    <Fragment>
      {publicLinksData.map((link) => (
        <NavLink
          key={link.linkName}
          to={link.url}
          className={({ isActive }) =>
            isActive ? styles.active : styles.linkItem
          }
        >
          {link.linkName}
        </NavLink>
      ))}
    </Fragment>
  );
};

export default NavigationLinks;
