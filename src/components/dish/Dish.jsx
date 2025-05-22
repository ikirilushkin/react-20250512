import { useCount } from "./use-count";

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
      <div>
        <button onClick={onIncrement} disabled={count === DISH_MAX_COUNT}>
          Add
        </button>
        <span>{count}</span>
        <button onClick={onDecrement} disabled={count === DISH_MIN_COUNT}>
          Remove
        </button>
      </div>
    </div>
  );
};
