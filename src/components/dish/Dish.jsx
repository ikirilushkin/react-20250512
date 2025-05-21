import { useCount } from "./use-count";

export const Dish = ({ dish, initialCount = 0 }) => {
  const { count, onIncrement, onDecrement } = useCount(initialCount, 0, 5);
  const handleAdd = () => {
    onIncrement();
  };
  const handleRemove = () => {
    onDecrement();
  };
  return (
    <div style={{ border: "1px solid", padding: "5px" }}>
      {dish.name} <i>{dish.price}$</i>
      <div>
        <button onClick={handleAdd} hidden={count === 5}>
          Add
        </button>
        <span>{count}</span>
        <button onClick={handleRemove} hidden={count === 0}>
          Remove
        </button>
      </div>
    </div>
  );
};
