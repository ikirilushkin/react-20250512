import { DishContainer } from "../dish/dish-container";
import styles from "./dishes.module.css";

export const Dishes = ({ dishes }) => {
  return (
    <div>
      {dishes.map((id) => (
        <DishContainer key={id} id={id} className={styles.dish} />
      ))}
    </div>
  );
};
