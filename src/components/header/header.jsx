import { useContext } from "react";
import { Button } from "../button/button";
import { ThemeButton } from "../theme-button/theme-button";
import { AuthContext } from "../auth-context";
import { Profile } from "../profile/profile";
import { ThemeContext } from "../theme-context";
import classNames from "classnames/bind";
import styles from "./header.module.css";

export const Header = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <h3 className={styles.title}>Restaurants</h3>
      <div className={styles.profile}>
        {authUser === null ? (
          <Button onClick={() => setAuthUser({ name: "John Doe" })}>
            Login
          </Button>
        ) : (
          <Profile />
        )}
        <div className={styles.themeButton}>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
