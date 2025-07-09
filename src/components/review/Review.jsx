import classNames from "classnames/bind";
import { Stars } from "../stars/Stars";
import styles from "./review.module.css";
import { UserContainer } from "../user/user-container";
import { useContext, useState } from "react";
import { AuthContext } from "../auth-context";
import { Button } from "../button/button";
import { ReviewForm } from "../review-form/review-form";
import { useEditReviewMutation } from "../../redux/api";

export const Review = ({ review, className }) => {
  const { authUser } = useContext(AuthContext);
  let [showEditForm, setShowEditForm] = useState(false);
  const [editReviewMutation, { isLoading }] = useEditReviewMutation();
  const handleEdit = (updatedReview) => {
    editReviewMutation({ review: updatedReview });
    setShowEditForm(false);
  };
  return (
    <div className={classNames(styles.container, className)}>
      <div className={classNames(styles.review)}>
        <div className={styles.content}>
          <p className={styles.name}>
            <UserContainer id={review.userId} />
          </p>
          <p className={styles.body}>{review.text}</p>
        </div>
        <div>
          <Stars max={5} current={review.rating} />
        </div>
      </div>
      {authUser.id === review.userId && !showEditForm && (
        <Button onClick={() => setShowEditForm(true)} disabled={isLoading}>
          Edit
        </Button>
      )}
      {showEditForm && (
        <ReviewForm onSubmit={handleEdit} review={review} allowClear={false} />
      )}
    </div>
  );
};
