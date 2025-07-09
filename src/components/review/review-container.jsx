import { Review } from "./review";

export const ReviewContainer = ({ review, className }) => {
  if (!review) {
    return null;
  }
  return <Review review={review} className={className} />;
};
