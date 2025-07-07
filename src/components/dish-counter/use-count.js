import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../redux/entities/cart/slice";
import { useCallback } from "react";

export const useCount = (dishId) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => selectItemAmountById(state, dishId));

  const onIncrement = useCallback(
    () => dispatch(addToCart(dishId)),
    [dispatch, dishId]
  );

  const onDecrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dispatch, dishId]
  );

  return { count: amount, onIncrement, onDecrement };
};
