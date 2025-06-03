import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progressBar/ProgressBar";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
