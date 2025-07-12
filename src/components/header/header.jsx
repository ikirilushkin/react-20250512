"use client";

import { useContext } from "react";
import { ThemeButton } from "../theme-button/theme-button";
import { ThemeContext } from "../theme-context";
import classNames from "classnames/bind";
import styles from "./header.module.css";
import { HeaderUser } from "../header-user/header-user";
import Link from "next/link";

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
        <Link className={styles.menuItem} href={"/"}>
          Home
        </Link>
        <Link className={styles.menuItem} href={"/restaurants"}>
          Restaurants
        </Link>
      </div>
      <HeaderUser />
      <div className={styles.themeButton}>
        <ThemeButton />
      </div>
    </header>
  );
};
