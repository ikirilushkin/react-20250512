import { Tabs } from "../tabs/Tabs";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";
import { Restaurant } from "../restaurant/Restaurant";

export const RestaurantPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  return (
    <>
      <Tabs
        tabs={restaurants}
        activeTab={activeRestaurant}
        onActiveTabChanged={setActiveRestaurant}
        getLabel={(restaurant) => restaurant.name}
      />
      <Restaurant restaurant={activeRestaurant} />
    </>
  );
};
