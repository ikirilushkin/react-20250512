import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../../components/restaurant/restaurant-container";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  return (
    <>
      <RestaurantContainer id={restaurantId} />
      <Outlet />
    </>
  );
};
