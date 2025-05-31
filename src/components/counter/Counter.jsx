import styles from "./counter.module.css";

export const Counter = ({ count, min, max, onIncrement, onDecrement }) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={onIncrement}
        disabled={count === max}
      >
        +
      </button>
      <span className={styles.value}>{count}</span>
      <button
        className={styles.button}
        onClick={onDecrement}
        disabled={count === min}
      >
        -
      </button>
    </div>
  );
};
