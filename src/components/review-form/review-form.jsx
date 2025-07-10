import { Counter } from "../counter/Counter";
import { useReviewForm } from "./use-review-form";
import styles from "./form.module.css";
import { Button } from "../button/button";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const ReviewForm = ({
  onSubmit,
  review,
  allowClear = true,
  disabled = false,
}) => {
  const { form, onTextChanged, onRatingChanged, clear } = useReviewForm(review);

  const { text, rating } = form;

  const handleSubmit = () => {
    onSubmit({ text, rating, id: review?.id });
    clear();
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className={styles.formElement}>
        <label>Text</label>
        <input
          className={styles.input}
          value={text}
          onChange={(event) => onTextChanged(event.target.value)}
        ></input>
      </div>
      <div className={styles.formElement}>
        <label>Rating</label>
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
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          onClick={handleSubmit}
          disabled={disabled}
        >
          Send
        </Button>
        {allowClear && (
          <Button className={styles.button} onClick={clear}>
            Clear
          </Button>
        )}
      </div>
    </form>
  );
};
