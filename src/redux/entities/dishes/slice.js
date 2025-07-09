import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurant } from "./get-dishes-by-restaurant";
import { getDishById } from "./get-dish-by-id";
import { RequestStatus } from "../../../types/request-status";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: RequestStatus.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder.addCase(getDishesByRestaurant.pending, (state) => {
      state.requestStatus = RequestStatus.PENDING;
    });
    builder.addCase(getDishesByRestaurant.rejected, (state) => {
      state.requestStatus = RequestStatus.REJECTED;
    });
    builder.addCase(getDishesByRestaurant.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
      state.requestStatus = RequestStatus.FULFILLED;
    });
    builder.addCase(getDishById.fulfilled, (state, { payload }) => {
      entityAdapter.upsertOne(state, payload);
      state.requestStatus = RequestStatus.FULFILLED;
    });
    builder.addCase(getDishById.rejected, (state) => {
      state.requestStatus = RequestStatus.REJECTED;
    });
    builder.addCase(getDishById.pending, (state) => {
      state.requestStatus = RequestStatus.PENDING;
    });
  },
});

const selectDishesSlice = (state) => state[dishesSlice.name];

export const { selectIds: selectDishIds, selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishesSlice);

export const { selectRequestStatus } = dishesSlice.selectors;
