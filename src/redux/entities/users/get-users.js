import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "./slice";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users");
    const result = await response.json();
    if (!result.length) {
      return rejectWithValue("no data");
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return selectUserIds(state).length === 0;
    },
  }
);
