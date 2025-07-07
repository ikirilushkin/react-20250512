import { useSelector } from "react-redux";
import { RestaurantTab } from "../../components/restaurant-tab/restaurant-tab";
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice";
import { Outlet } from "react-router";
import { TabLink } from "../../components/tab-link/tab-link";

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <>
      {restaurantIds.map((id) => (
        <TabLink to={`/restaurants/${id}/menu`} key={id}>
          <RestaurantTab id={id} />
        </TabLink>
      ))}
      <Outlet />
    </>
  );
};
