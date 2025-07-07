import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../../redux/entities/restaurant/slice";
import { Reviews } from "../../../components/review/Reviews";
import { ReviewForm } from "../../../components/review-form/review-form";
import { useContext } from "react";
import { AuthContext } from "../../../components/auth-context";

export const ReviewPage = () => {
  const { restaurantId } = useParams();
  const { authUser } = useContext(AuthContext);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurantId) {
    return null;
  }
  const { reviews } = restaurant;
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
