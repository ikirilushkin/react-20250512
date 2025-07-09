import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurant } from "./get-reviews-by-restaurant";
import { RequestStatus } from "../../../types/request-status";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: RequestStatus.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder.addCase(getReviewsByRestaurant.pending, (state) => {
      state.requestStatus = RequestStatus.PENDING;
    });
    builder.addCase(getReviewsByRestaurant.rejected, (state) => {
      state.requestStatus = RequestStatus.REJECTED;
    });
    builder.addCase(getReviewsByRestaurant.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
      state.requestStatus = RequestStatus.FULFILLED;
    });
  },
});

const selectReviewsSlice = (state) => state[reviewsSlice.name];

export const { selectIds: selectReviewIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice);

export const { selectRequestStatus } = reviewsSlice.selectors;
