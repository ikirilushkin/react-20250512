import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";
import { RequestStatus } from "../../../types/request-status";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: RequestStatus.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.rejected, (state) => {
      state.requestStatus = RequestStatus.REJECTED;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
      state.requestStatus = RequestStatus.FULFILLED;
    });
  },
});

const selectUsersSlice = (state) => state[usersSlice.name];

export const { selectIds: selectUserIds, selectById: selectUserById } =
  entityAdapter.getSelectors(selectUsersSlice);

export const { selectRequestStatus } = usersSlice.selectors;
