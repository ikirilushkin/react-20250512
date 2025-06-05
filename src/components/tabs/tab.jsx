import { Button } from "../button/button";
import styles from "./tab.module.css";

export const Tab = ({ children, isActive, onActiveTabChanged }) => {
  return (
    <Button
      onClick={onActiveTabChanged}
      isActive={isActive}
      className={styles.tab}
    >
      {children}
    </Button>
  );
};
