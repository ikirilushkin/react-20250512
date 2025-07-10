import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { CartItem } from "../cart-item/cart-item";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  if (!items.length) {
    return null;
  }
  return (
    <ul>
      {items.map(({ id, amount }) => (
        <CartItem key={id} itemId={id} amount={amount} />
      ))}
    </ul>
  );
};
