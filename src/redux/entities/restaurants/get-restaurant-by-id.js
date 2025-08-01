import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectLoadedRestaurants } from "./slice";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );
    const result = await response.json();
    return result;
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      return !selectLoadedRestaurants(state).includes(id);
    },
  }
);
