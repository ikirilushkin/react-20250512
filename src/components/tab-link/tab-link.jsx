import classNames from "classnames/bind";
import { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../theme-context";
import styles from "./tab-link.module.css";

export const TabLink = ({ children, to }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLink
      className={({ isActive }) => {
        return classNames(styles.navLink, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
          [styles.active]: isActive,
        });
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};
