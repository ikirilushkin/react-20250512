import { useContext } from "react";
import { Reviews } from "../review/Reviews";
import { ReviewForm } from "../review-form/review-form";
import { AuthContext } from "../auth-context";
import styles from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { DishContainer } from "../dish/dish-container";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name, description, menu, reviews } = restaurant;
  const { authUser } = useContext(AuthContext);
  return (
    <div>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.description}>{description}</div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Menu</h3>
        {menu.map((dishId) => (
          <DishContainer key={dishId} id={dishId} className={styles.dish} />
        ))}
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Reviews</h3>
        {reviews.length ? <Reviews reviews={reviews} /> : "No reviews yet"}
        {authUser.isAuthorized && (
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
        )}
      </div>
    </div>
  );
};
