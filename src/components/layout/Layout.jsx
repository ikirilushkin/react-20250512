import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progressBar/ProgressBar";
import styles from "./layout.module.css";
import { Cart } from "../cart/cart";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <div className={styles.container}>
        {children}
        <Cart />
      </div>
      <Footer />
    </>
  );
};
