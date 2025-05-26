import { Review } from "./Review";

export const Reviews = ({ reviews }) => {
  return reviews.map((review) => <Review key={review.id} review={review} />);
};
