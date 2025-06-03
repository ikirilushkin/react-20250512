import { Counter } from "../counter/Counter";
import { useReviewForm } from "./use-review-form";
import styles from "./form.module.css";
import { Button } from "../button/button";

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
      <div className={styles.formElement}>
        <label>Name</label>
        <input
          className={styles.input}
          value={name}
          onChange={(event) => onNameChanged(event.target.value)}
        ></input>
      </div>
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
      <div style={{ marginTop: "15px" }}>
        <Button className={styles.button} onClick={handleSubmit}>
          Send
        </Button>
        <Button className={styles.button} onClick={clear}>
          Clear
        </Button>
      </div>
    </form>
  );
};
