import classNames from "classnames/bind";
import styles from "./dish.module.css";
import { DishCounter } from "../dish-counter/dish-counter";
import Link from "next/link";

export const Dish = ({ id, name, price, showCounter, className }) => {
  return (
    <div className={classNames(styles.dish, className)}>
      <div className={styles.content}>
        <Link href={`/dishes/${id}`} className={styles.name}>
          {name}
        </Link>
        <p className={styles.price}>{price} $</p>
      </div>
      {showCounter && <DishCounter dishId={id} />}
    </div>
  );
};
