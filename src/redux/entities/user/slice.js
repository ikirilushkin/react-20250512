import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalized-mock";

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => {
      return state.entities[id];
    },
  },
});

export const { selectUserIds, selectUserById } = userSlice.selectors;
