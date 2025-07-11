"use client";

import classNames from "classnames/bind";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";
import styles from "./tab-link.module.css";
import Link from "next/link";

export const TabLink = ({ children, to, isActive }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      className={classNames(styles.navLink, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.active]: isActive,
      })}
      href={to}
      prefetch={false}
    >
      {children}
    </Link>
  );
};
