import { Dish } from "../dish/Dish";
import { Reviews } from "../review/Reviews";
import { ReviewForm } from "../reviewForm/ReviewForm";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
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
      </div>
    </div>
  );
};
