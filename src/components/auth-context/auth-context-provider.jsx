import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthContext value={{ authUser, setAuthUser }}>{children}</AuthContext>
  );
};
