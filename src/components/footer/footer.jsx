"use client";

import classNames from "classnames/bind";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";
import styles from "./footer.module.css";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={classNames(styles.footer, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <span>React course</span>
    </footer>
  );
};
