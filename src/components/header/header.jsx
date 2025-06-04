import { useContext } from "react";
import { ThemeButton } from "../theme-button/theme-button";
import { ThemeContext } from "../theme-context";
import classNames from "classnames/bind";
import styles from "./header.module.css";
import { HeaderUser } from "../header-user/header-user";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <h3 className={styles.title}>Restaurants</h3>
      <HeaderUser />
      <div className={styles.themeButton}>
        <ThemeButton />
      </div>
    </header>
  );
};
