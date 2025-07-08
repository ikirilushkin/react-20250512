import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsByRestaurant } from "./slice";

export const getReviewsByRestaurant = createAsyncThunk(
  "reviews/getReviewsByRestaurant",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      return selectReviewsByRestaurant(state, restaurantId).length === 0;
    },
  }
);
