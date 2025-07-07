import { Outlet } from "react-router";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progressBar/ProgressBar";
import styles from "./layout.module.css";
import { Cart } from "../cart/cart";

export const Layout = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <div className={styles.container}>
        <Outlet />
        <Cart />
      </div>
      <Footer />
    </>
  );
};
