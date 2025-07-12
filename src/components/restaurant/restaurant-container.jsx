import { Restaurant } from "./restaurant.jsx";

export const RestaurantContainer = ({ restaurant }) => {
  return (
    <Restaurant
      id={restaurant.id}
      name={restaurant.name}
      description={restaurant.description}
    />
  );
};
