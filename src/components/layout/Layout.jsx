import { ProgressBar } from "../progressBar/ProgressBar";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header className={styles.header}>
        <h3>Restaurants</h3>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <span>React course</span>
      </footer>
    </>
  );
};
