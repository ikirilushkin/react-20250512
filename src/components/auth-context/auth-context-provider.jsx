import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({ isAuthorized: false });
  const login = () => {
    setAuthUser({ name: "John Doe", isAuthorized: true });
  };
  const logout = () => {
    setAuthUser({ isAuthorized: false });
  };
  return (
    <AuthContext value={{ authUser, login, logout }}>{children}</AuthContext>
  );
};
