import classNames from "classnames/bind";
import { Stars } from "../stars/Stars";
import styles from "./review.module.css";

export const Review = ({ review, className }) => {
  return (
    <div className={classNames(styles.review, className)}>
      <div className={styles.content}>
        <p className={styles.name}>{review.user}</p>
        <p className={styles.body}>{review.text}</p>
      </div>
      <div>
        <Stars max={5} current={review.rating} />
      </div>
    </div>
  );
};
