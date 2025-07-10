import { ReviewContainer } from "./review-container";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return reviews.map((review) => (
    <ReviewContainer
      key={review.id}
      review={review}
      className={styles.review}
    />
  ));
};
