import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { Dish } from "./dish";

export const DishContainer = ({ id, className }) => {
  const dish = useSelector((state) => selectDishById(state, id));
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
