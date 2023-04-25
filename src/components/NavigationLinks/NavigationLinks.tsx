import { Fragment } from "react";
import {
  privateLinksData,
  publicLinksData,
  removeFromStorage,
} from "../../utils";
import { NavLink } from "react-router-dom";
import styles from "./NavigationLinks.module.css";
import { useAppSelector } from "../../hooks";
import { getStateFromAuthReducer } from "../../store";
import { useAuth } from "../../hooks";

const NavigationLinks = () => {
  const { isAuthenticated } = useAppSelector(getStateFromAuthReducer);

  const { authFuncs } = useAuth({
    localStorageCB: removeFromStorage,
    url: "/",
  });

  const logoutUser = () => authFuncs();

  return isAuthenticated ? (
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
      <button className={styles.logoutBtn} onClick={logoutUser}>
        Logout
      </button>
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
