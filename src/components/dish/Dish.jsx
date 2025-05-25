import { Counter } from "../counter/Counter";
import { useCount } from "../counter/use-count";

const DISH_MAX_COUNT = 5;
const DISH_MIN_COUNT = 0;

export const Dish = ({ dish, initialCount = 0 }) => {
  const { count, onIncrement, onDecrement } = useCount(
    initialCount,
    DISH_MIN_COUNT,
    DISH_MAX_COUNT
  );
  return (
    <div style={{ border: "1px solid", padding: "5px" }}>
      {dish.name} <i>{dish.price}$</i>
      <Counter
        count={count}
        min={DISH_MIN_COUNT}
        max={DISH_MAX_COUNT}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
};
