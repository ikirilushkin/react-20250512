import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return `${restaurant.name}`;
};
