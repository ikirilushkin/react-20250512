import { useContext } from "react";
import { Dish } from "../dish/Dish";
import { Reviews } from "../review/Reviews";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { AuthContext } from "../auth-context";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  const { authUser } = useContext(AuthContext);
  return (
    <div>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <div className={styles.description}>{restaurant.description}</div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Menu</h3>
        {restaurant.menu.map((dish) => (
          <Dish key={dish.id} dish={dish} className={styles.dish} />
        ))}
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Reviews</h3>
        {restaurant.reviews.length ? (
          <Reviews reviews={restaurant.reviews} />
        ) : (
          "No reviews yet"
        )}
        {authUser !== null ? (
          <div className={styles.block}>
            <h4>Leave your review</h4>
            <ReviewForm
              onSubmit={({ name, text, rating }) =>
                console.log(
                  `New review is added by ${name} with text: ${text} and rating: ${rating}`
                )
              }
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
