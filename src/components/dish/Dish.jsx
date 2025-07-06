import classNames from "classnames/bind";
import styles from "./dish.module.css";
import { NavLink } from "react-router";
import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ id, name, price, showCounter, className }) => {
  return (
    <div className={classNames(styles.dish, className)}>
      <div className={styles.content}>
        <NavLink to={`/dish/${id}`} className={styles.name}>
          {name}
        </NavLink>
        <p className={styles.price}>{price} $</p>
      </div>
      {showCounter && <DishCounter dishId={id} />}
    </div>
  );
};
