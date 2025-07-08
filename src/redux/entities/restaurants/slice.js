import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurantById } from "./get-restaurant-by-id";
import { RequestStatus } from "../../../types/request-status";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: RequestStatus.IDLE,
    restaurantRequestStatus: RequestStatus.IDLE,
    loadedRestaurants: [],
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
    selectRestaurantRequestStatus: (state) => state.restaurantRequestStatus,
    selectLoadedRestaurants: (state) => state.loadedRestaurants,
  },
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
      state.requestStatus = RequestStatus.FULFILLED;
    });
    builder.addCase(getRestaurants.rejected, (state) => {
      state.requestStatus = RequestStatus.REJECTED;
    });
    builder.addCase(getRestaurantById.pending, (state) => {
      state.restaurantRequestStatus = RequestStatus.PENDING;
    });
    builder.addCase(getRestaurantById.fulfilled, (state, { payload }) => {
      entityAdapter.updateOne(state, payload);
      state.restaurantRequestStatus = RequestStatus.FULFILLED;
      state.loadedRestaurants.push(payload.id);
    });
    builder.addCase(getRestaurantById.rejected, (state) => {
      state.restaurantRequestStatus = RequestStatus.REJECTED;
    });
  },
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const {
  selectRequestStatus,
  selectRestaurantRequestStatus,
  selectLoadedRestaurants,
} = restaurantsSlice.selectors;
