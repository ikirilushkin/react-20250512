import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getReviewsByRestaurant } from "./get-reviews-by-restaurant";
import { RequestStatus } from "../../../types/request-status";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: RequestStatus.IDLE,
    entitiesByRestaurant: {},
  }),
  selectors: {
    selectRewiewsByRestaurant: (state, restaurantId) => {
      if (!state.entitiesByRestaurant[restaurantId]) {
        return [];
      }
      return Object.values(state.entitiesByRestaurant[restaurantId]);
    },
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder.addCase(getReviewsByRestaurant.pending, (state) => {
      state.requestStatus = RequestStatus.PENDING;
    });
    builder.addCase(getReviewsByRestaurant.rejected, (state) => {
      state.requestStatus = RequestStatus.REJECTED;
    });
    builder.addCase(
      getReviewsByRestaurant.fulfilled,
      (state, { payload, meta }) => {
        state.entitiesByRestaurant[meta.arg] = payload.reduce((acc, review) => {
          acc[review.id] = review;
          return acc;
        }, {});
        entityAdapter.setMany(state, payload);
        state.requestStatus = RequestStatus.FULFILLED;
      }
    );
  },
});

const selectReviewsSlice = (state) => state[reviewsSlice.name];
const selectReviewsRestaurant = (state, restaurantId) => restaurantId;

export const { selectIds: selectReviewIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice);

export const selectReviewsByRestaurant = createSelector(
  [selectReviewsSlice, selectReviewsRestaurant],
  (reviewsSlice, restaurantId) => {
    if (!reviewsSlice.entitiesByRestaurant[restaurantId]) {
      return [];
    }
    return Object.values(reviewsSlice.entitiesByRestaurant[restaurantId]);
  }
);

export const { selectRequestStatus } = reviewsSlice.selectors;
