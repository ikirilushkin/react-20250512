export const Counter = ({ count, min, max, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement} disabled={count === max}>
        Add
      </button>
      <span>{count}</span>
      <button onClick={onDecrement} disabled={count === min}>
        Remove
      </button>
    </div>
  );
};
