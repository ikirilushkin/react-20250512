import classNames from "classnames/bind";
import styles from "./button.module.css";

export const Button = ({ children, onClick, isActive, className }) => {
  return (
    <button
      className={classNames(styles.base, className, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
