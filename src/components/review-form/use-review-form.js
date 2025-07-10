import { useReducer } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

const SET_TEXT = "set_text";
const SET_RATING = "set_rating";
const CLEAR = "clear_review";

const initialState = { text: "", rating: 3 };

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_TEXT: {
      return {
        ...state,
        text: payload,
      };
    }
    case SET_RATING: {
      return {
        ...state,
        rating: payload,
      };
    }
    case CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
}

export const useReviewForm = (review) => {
  const [form, dispatch] = useReducer(
    reducer,
    review ? { text: review.text, rating: review.rating } : initialState
  );

  const onTextChanged = (text) => {
    dispatch({ type: SET_TEXT, payload: text });
  };

  const onRatingChanged = (rating) => {
    if (rating < MIN_COUNT || rating > MAX_COUNT) {
      return;
    }
    dispatch({ type: SET_RATING, payload: rating });
  };

  const clear = () => {
    dispatch({ type: CLEAR });
  };

  return {
    form,
    onTextChanged,
    onRatingChanged,
    clear,
  };
};
