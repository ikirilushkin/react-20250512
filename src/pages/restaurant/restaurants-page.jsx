import { useDispatch, useSelector } from "react-redux";
import { RestaurantTab } from "../../components/restaurant-tab/restaurant-tab";
import {
  selectRequestStatus,
  selectRestaurantIds,
} from "../../redux/entities/restaurants/slice";
import { Outlet } from "react-router";
import { TabLink } from "../../components/tab-link/tab-link";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { RequestStatus } from "../../types/request-status";
import { Loader } from "../../components/loader/loader";

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);
  const restaurantIds = useSelector(selectRestaurantIds);
  const requestStatus = useSelector(selectRequestStatus);
  if (RequestStatus.isLoading(requestStatus)) {
    return <Loader />;
  }

  return (
    <>
      {restaurantIds.map((id) => (
        <TabLink to={`/restaurants/${id}`} key={id}>
          <RestaurantTab id={id} />
        </TabLink>
      ))}
      <Outlet />
    </>
  );
};
