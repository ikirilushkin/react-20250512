import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../../components/restaurant/restaurant-container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { RequestStatus } from "../../types/request-status";
import { Loader } from "../../components/loader/loader";
import { selectRestaurantRequestStatus } from "../../redux/entities/restaurants/slice";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantById(restaurantId));
  }, [dispatch, restaurantId]);
  const requestStatus = useSelector(selectRestaurantRequestStatus);

  if (!restaurantId) {
    return null;
  }

  if (RequestStatus.isLoading(requestStatus)) {
    return <Loader />;
  }

  return (
    <>
      <RestaurantContainer id={restaurantId} />
      <Outlet />
    </>
  );
};
