import classNames from "classnames/bind";
import styles from "./button.module.css";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";

export const Button = ({
  children,
  onClick,
  isActive,
  className,
  disabled = false,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(styles.base, className, {
        [styles.active]: isActive,
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
