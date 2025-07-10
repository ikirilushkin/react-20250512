import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ restaurant }) => {
  return (
    <Restaurant name={restaurant.name} description={restaurant.description} />
  );
};
