import { useContext } from "react";
import { ThemeButton } from "../theme-button/theme-button";
import { ThemeContext } from "../theme-context";
import classNames from "classnames/bind";
import styles from "./header.module.css";
import { HeaderUser } from "../header-user/header-user";
import { NavLink } from "react-router";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles.menu}>
        <NavLink className={styles.menuItem} to="/">
          Home
        </NavLink>
        <NavLink className={styles.menuItem} to="/restaurants">
          Restaurants
        </NavLink>
      </div>
      <HeaderUser />
      <div className={styles.themeButton}>
        <ThemeButton />
      </div>
    </header>
  );
};
