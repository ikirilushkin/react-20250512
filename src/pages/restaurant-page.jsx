import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../components/restaurant/restaurant-container";
import { Loader } from "../components/loader/loader";
import { useGetRestaurantsQuery } from "../redux/api";
import { RequestError } from "../components/request-error/request-error";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === restaurantId),
    }),
  });

  if (!restaurant) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <RequestError />;
  }

  return (
    <>
      <RestaurantContainer restaurant={restaurant} />
      <Outlet />
    </>
  );
};
