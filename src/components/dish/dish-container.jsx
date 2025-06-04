import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { Dish } from "./dish";

export const DishContainer = ({ id, initialCount = 0, className }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { authUser } = useContext(AuthContext);
  return (
    <Dish
      name={dish.name}
      price={dish.price}
      showCounter={authUser.isAuthorized}
      initialCount={initialCount}
      className={className}
    />
  );
};
