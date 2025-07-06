import { Outlet, useParams } from "react-router";
import { Restaurant } from "../../components/restaurant/restaurant";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  return (
    <>
      <Restaurant id={restaurantId} />
      <Outlet />
    </>
  );
};
