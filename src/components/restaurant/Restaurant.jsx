import styles from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { TabLink } from "../tab-link/tab-link";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name, description } = restaurant;
  return (
    <div>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.description}>{description}</div>
      <TabLink to="menu">Menu</TabLink>
      <TabLink to="reviews">Reviews</TabLink>
    </div>
  );
};
