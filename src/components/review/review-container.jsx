import { Review } from "./review";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";

export const ReviewContainer = ({ id, className }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  if (!review) {
    return null;
  }
  const { userId, text, rating } = review;
  return (
    <Review userId={userId} text={text} rating={rating} className={className} />
  );
};
