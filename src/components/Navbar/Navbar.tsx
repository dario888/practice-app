import React, { Fragment } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { privateLinksData, publicLinksData } from "../../utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
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
        {true ? (
          <Fragment>
            {" "}
            {privateLinksData.map((link) => (
              <NavLink
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
          publicLinksData.map((link) => (
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                isActive ? styles.active : styles.linkItem
              }
            >
              {link.linkName}
            </NavLink>
          ))
        )}
      </div>
    </nav>
  );
};
