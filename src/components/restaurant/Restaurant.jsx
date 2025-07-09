import styles from "./restaurant.module.css";
import { TabLink } from "../tab-link/tab-link";

export const Restaurant = ({ name, description }) => {
  return (
    <div>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.description}>{description}</div>
      <TabLink to="menu">Menu</TabLink>
      <TabLink to="reviews">Reviews</TabLink>
    </div>
  );
};
