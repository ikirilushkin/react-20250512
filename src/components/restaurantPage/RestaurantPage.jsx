import { Restaurant } from "../restaurant/Restaurant";
import { Tabs } from "../tabs/Tabs";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";

export const RestaurantPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  return (
    <div>
      <Tabs
        tabs={restaurants}
        activeTab={activeRestaurant}
        onActiveTabChanged={setActiveRestaurant}
        getLabel={(restaurant) => restaurant.name}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
