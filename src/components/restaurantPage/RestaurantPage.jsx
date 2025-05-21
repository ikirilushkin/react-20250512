import { Restaurant } from "../restaurant/Restaurant";
import { Tabs } from "../tabs/Tabs";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";

export const RestaurantPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  const handleTabChanged = (restaurant) => {
    setActiveRestaurant(restaurant);
  };
  return (
    <div>
      <Tabs
        tabs={restaurants}
        onActiveTabChanged={handleTabChanged}
        getLabel={(restaurant) => restaurant.name}
      ></Tabs>
      <Restaurant restaurant={activeRestaurant}></Restaurant>
    </div>
  );
};
