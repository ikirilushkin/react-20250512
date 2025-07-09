import { useParams } from "react-router";
import { Reviews } from "../components/review/reviews";
import { ReviewForm } from "../components/review-form/review-form";
import { useContext } from "react";
import { AuthContext } from "../components/auth-context";
import { Loader } from "../components/loader/loader";
import { RequestError } from "../components/request-error/request-error";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../redux/api";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  const { isLoading: isLoadingUsers } = useGetUsersQuery();
  const { authUser } = useContext(AuthContext);
  const [addReviewMutation, { isLoading: isNewReviewLoading }] =
    useAddReviewMutation();

  if (isLoading || isLoadingUsers) {
    return <Loader />;
  }
  if (isError) {
    return <RequestError />;
  }
  const handleReviewSubmit = (review) => {
    addReviewMutation({
      restaurantId,
      review: { ...review, userId: authUser.id },
    });
  };
  return (
    <>
      {reviews.length ? <Reviews reviews={reviews} /> : "No reviews yet"}
      {authUser.isAuthorized && (
        <div>
          <h4>Leave your review</h4>
          <ReviewForm
            onSubmit={handleReviewSubmit}
            disabled={isNewReviewLoading}
          />
        </div>
      )}
    </>
  );
};
