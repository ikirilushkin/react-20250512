import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice";
import { Tab } from "../tabs/tab";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurant, setActiveRestaurant] = useState(restaurantIds[0]);
  return (
    <>
      {restaurantIds.map((id) => (
        <Tab
          key={id}
          isActive={activeRestaurant === id}
          onActiveTabChanged={() => setActiveRestaurant(id)}
        >
          <RestaurantTab id={id} />
        </Tab>
      ))}
      <Restaurant id={activeRestaurant} />
    </>
  );
};
