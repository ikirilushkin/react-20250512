import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurant/slice";
import { useParams } from "react-router";
import { DishContainer } from "../../../components/dish/dish-container";
import styles from "./menu.module.css";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurantId) {
    return null;
  }
  const { menu } = restaurant;
  return (
    <>
      {menu.map((dishId) => (
        <DishContainer key={dishId} id={dishId} className={styles.dish} />
      ))}
    </>
  );
};
