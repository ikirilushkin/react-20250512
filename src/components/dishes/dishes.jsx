import { DishContainer } from "../dish/dish-container";
import styles from "./dishes.module.css";

export const Dishes = ({ dishes }) => {
  if (!dishes) {
    return null;
  }
  return (
    <div>
      {dishes.map((dish) => (
        <DishContainer key={dish.id} dish={dish} className={styles.dish} />
      ))}
    </div>
  );
};
