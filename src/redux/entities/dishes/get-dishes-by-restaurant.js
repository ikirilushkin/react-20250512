import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishesByRestaurant = createAsyncThunk(
  "dishes/getDishesByRestaurant",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  }
);
