import classNames from "classnames/bind";
import { Counter } from "../counter/Counter";
import { useCount } from "../counter/use-count";
import styles from "./dish.module.css";

const DISH_MAX_COUNT = 5;
const DISH_MIN_COUNT = 0;

export const Dish = ({ dish, initialCount = 0, className }) => {
  const { count, onIncrement, onDecrement } = useCount(
    initialCount,
    DISH_MIN_COUNT,
    DISH_MAX_COUNT
  );
  return (
    <div className={classNames(styles.dish, className)}>
      <div className={styles.content}>
        <p className={styles.name}>{dish.name}</p>
        <p className={styles.price}>{dish.price} $</p>
      </div>
      <div>
        <Counter
          count={count}
          min={DISH_MIN_COUNT}
          max={DISH_MAX_COUNT}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </div>
  );
};
