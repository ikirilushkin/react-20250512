import classNames from "classnames/bind";
import { Stars } from "../stars/Stars";
import styles from "./review.module.css";
import { UserContainer } from "../user/user-container";

export const Review = ({ userId, text, rating, className }) => {
  return (
    <div className={classNames(styles.review, className)}>
      <div className={styles.content}>
        <p className={styles.name}>
          <UserContainer id={userId} />
        </p>
        <p className={styles.body}>{text}</p>
      </div>
      <div>
        <Stars max={5} current={rating} />
      </div>
    </div>
  );
};
