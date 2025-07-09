export const RequestStatus = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  isLoading: (status) => {
    return status === RequestStatus.IDLE || status === RequestStatus.PENDING;
  },
};
