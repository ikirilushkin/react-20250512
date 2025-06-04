import { createContext } from "react";

export const AuthContext = createContext({
  authUser: { isAuthorized: false },
  setAuthUser: () => {},
});
