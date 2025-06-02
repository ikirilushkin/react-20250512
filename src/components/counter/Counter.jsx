import { Button } from "../button/button";
import styles from "./counter.module.css";

export const Counter = ({ count, min, max, onIncrement, onDecrement }) => {
  return (
    <div>
      <Button
        className={styles.button}
        onClick={onIncrement}
        disabled={count === max}
      >
        +
      </Button>
      <span className={styles.value}>{count}</span>
      <Button
        className={styles.button}
        onClick={onDecrement}
        disabled={count === min}
      >
        -
      </Button>
    </div>
  );
};
