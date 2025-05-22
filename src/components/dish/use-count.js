import { useState } from "react";

export const useCount = (initial, min, max) => {
  const [count, setCount] = useState(initial);

  const onIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const onDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return { count, onIncrement, onDecrement };
};
