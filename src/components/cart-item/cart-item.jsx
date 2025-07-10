import { DishCounter } from "../dish-counter/dish-counter";
import { useGetDishByIdQuery } from "../../redux/api";

export const CartItem = ({ itemId, amount }) => {
  const { data: dish, isLoading } = useGetDishByIdQuery(itemId);
  if (isLoading) {
    return null;
  }

  return (
    <li>
      {dish.name} - {amount}
      <DishCounter dishId={itemId} />
    </li>
  );
};
