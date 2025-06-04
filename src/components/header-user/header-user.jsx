import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { Button } from "../button/button";
import styles from "./header-user.module.css";
import { Profile } from "../profile/profile";

export const HeaderUser = () => {
  const { authUser, login } = useContext(AuthContext);
  return (
    <div className={styles.profile}>
      {!authUser.isAuthorized ? (
        <Button onClick={login}>Login</Button>
      ) : (
        <Profile />
      )}
    </div>
  );
};
