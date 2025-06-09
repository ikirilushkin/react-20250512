import { Review } from "./review";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/slice";
import { selectUserById } from "../../redux/entities/user/slice";

export const ReviewContainer = ({ id, className }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { userId, text, rating } = review;
  const { name } = useSelector((state) => selectUserById(state, userId));
  return (
    <Review name={name} text={text} rating={rating} className={className} />
  );
};
