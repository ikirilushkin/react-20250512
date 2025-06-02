import { Review } from "./Review";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return reviews.map((review) => (
    <Review key={review.id} review={review} className={styles.review} />
  ));
};
