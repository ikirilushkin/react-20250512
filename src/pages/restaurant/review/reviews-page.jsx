import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Reviews } from "../../../components/review/reviews";
import { ReviewForm } from "../../../components/review-form/review-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../components/auth-context";
import { getReviewsByRestaurant } from "../../../redux/entities/reviews/get-reviews-by-restaurant";
import {
  selectRequestStatus,
  selectReviewsByRestaurant,
} from "../../../redux/entities/reviews/slice";
import { selectRequestStatus as selectRequestStatusUsers } from "../../../redux/entities/users/slice";
import { Loader } from "../../../components/loader/loader";
import { getUsers } from "../../../redux/entities/users/get-users";
import { RequestStatus } from "../../../types/request-status";
import { RequestError } from "../../../components/request-error/request-error";

export const ReviewPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const { authUser } = useContext(AuthContext);
  useEffect(() => {
    dispatch(getReviewsByRestaurant(restaurantId));
    dispatch(getUsers());
  }, [restaurantId, dispatch]);
  const reviews = useSelector((state) =>
    selectReviewsByRestaurant(state, restaurantId)
  );
  const requestStatus = useSelector(selectRequestStatus);
  const requestStatusUsers = useSelector(selectRequestStatusUsers);
  if (!restaurantId) {
    return null;
  }
  if (
    RequestStatus.isLoading(requestStatus) ||
    RequestStatus.isLoading(requestStatusUsers)
  ) {
    return <Loader />;
  }
  if (requestStatus === RequestStatus.REJECTED) {
    return <RequestError />;
  }
  return (
    <>
      {reviews.length ? <Reviews reviews={reviews} /> : "No reviews yet"}
      {authUser.isAuthorized && (
        <div>
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
    </>
  );
};
