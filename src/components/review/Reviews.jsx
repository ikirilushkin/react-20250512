import { ReviewContainer } from "./review-container";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return reviews.map(({ id }) => (
    <ReviewContainer key={id} id={id} className={styles.review} />
  ));
};
