import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesByRestaurant } from "./slice";

export const getDishesByRestaurant = createAsyncThunk(
  "dishes/getDishesByRestaurant",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      return selectDishesByRestaurant(state, restaurantId).length === 0;
    },
  }
);
