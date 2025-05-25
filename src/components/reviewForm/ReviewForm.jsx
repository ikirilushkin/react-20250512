import { Counter } from "../counter/Counter";
import { useReviewForm } from "./use-review-form";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const ReviewForm = ({ onSubmit }) => {
  const { form, onNameChanged, onTextChanged, onRatingChanged, clear } =
    useReviewForm();

  const { name, text, rating } = form;

  const handleSubmit = () => {
    onSubmit({ name, text, rating });
    clear();
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <span>Name</span>
        <input
          value={name}
          onChange={(event) => onNameChanged(event.target.value)}
        ></input>
      </div>
      <div>
        <span>Text</span>
        <input
          value={text}
          onChange={(event) => onTextChanged(event.target.value)}
        ></input>
      </div>
      <div>
        <span>Rating</span>
        <Counter
          count={rating}
          min={MIN_COUNT}
          max={MAX_COUNT}
          onIncrement={() => {
            onRatingChanged(rating + 1);
          }}
          onDecrement={() => {
            onRatingChanged(rating - 1);
          }}
        />
      </div>
      <div style={{ marginTop: "15px" }}>
        <button onClick={() => handleSubmit()}>Send</button>
        <button onClick={clear}>Clear</button>
      </div>
    </form>
  );
};
