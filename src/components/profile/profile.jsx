import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { Button } from "../button/button";
import styles from "./profile.module.css";

export const Profile = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  return (
    <>
      <p className={styles.name}>{authUser.name}</p>
      <Button onClick={() => setAuthUser(null)}>Log out</Button>
    </>
  );
};
