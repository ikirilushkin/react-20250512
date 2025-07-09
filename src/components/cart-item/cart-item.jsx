import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../dish-counter/dish-counter";

export const CartItem = ({ itemId, amount }) => {
  const { name } = useSelector((state) => selectDishById(state, itemId));
  return (
    <div>
      {name} - {amount}
      <DishCounter dishId={itemId} />
    </div>
  );
};
