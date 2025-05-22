export const Review = ({ review }) => {
  return (
    <div>
      <p>
        {review.text} <i>by {review.user}</i>
      </p>
    </div>
  );
};
