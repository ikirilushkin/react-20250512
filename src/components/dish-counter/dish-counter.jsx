import { Counter } from "../counter/Counter";
import { useCount } from "./use-count";

const DISH_MAX_COUNT = 5;
const DISH_MIN_COUNT = 0;

export const DishCounter = ({ dishId }) => {
  const { count, onIncrement, onDecrement } = useCount(dishId);
  return (
    <Counter
      count={count}
      min={DISH_MIN_COUNT}
      max={DISH_MAX_COUNT}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
