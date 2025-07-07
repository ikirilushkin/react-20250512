import { useState } from "react";
import { AuthContext } from ".";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/entities/cart/slice";

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState({ isAuthorized: false });
  const login = () => {
    setAuthUser({ name: "John Doe", isAuthorized: true });
  };
  const logout = () => {
    setAuthUser({ isAuthorized: false });
    dispatch(clearCart());
  };
  return (
    <AuthContext value={{ authUser, login, logout }}>{children}</AuthContext>
  );
};
