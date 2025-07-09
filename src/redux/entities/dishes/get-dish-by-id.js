import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./slice";

export const getDishById = createAsyncThunk(
  "dishes/getDishById",
  async (dishId) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();
    return result;
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      return !selectDishById(state, id);
    },
  }
);
