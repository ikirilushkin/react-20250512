import { useState } from "react";
import { AuthContext } from ".";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/entities/cart/slice";

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState({ isAuthorized: false });
  const login = () => {
    setAuthUser({
      id: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
      name: "Agata",
      isAuthorized: true,
    });
  };
  const logout = () => {
    setAuthUser({ isAuthorized: false });
    dispatch(clearCart());
  };
  return (
    <AuthContext value={{ authUser, login, logout }}>{children}</AuthContext>
  );
};
