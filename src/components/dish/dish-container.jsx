import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { Dish } from "./dish";

export const DishContainer = ({ dish, className }) => {
  const { authUser } = useContext(AuthContext);
  if (!dish) {
    return null;
  }
  return (
    <Dish
      id={dish.id}
      name={dish.name}
      price={dish.price}
      showCounter={authUser.isAuthorized}
      className={className}
    />
  );
};
