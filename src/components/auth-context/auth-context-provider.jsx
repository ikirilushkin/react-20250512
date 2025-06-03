import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const login = () => {
    setAuthUser({ name: "John Doe" });
  };
  const logout = () => {
    setAuthUser(null);
  };
  return (
    <AuthContext value={{ authUser, login, logout }}>{children}</AuthContext>
  );
};
