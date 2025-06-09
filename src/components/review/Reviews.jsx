import { ReviewContainer } from "./review-container";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return reviews.map((reviewId) => (
    <ReviewContainer key={reviewId} id={reviewId} className={styles.review} />
  ));
};
