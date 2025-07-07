import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return;
      }
      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
    clearCart: (state) => {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });
    },
  },
  selectors: {
    selectItemAmountById: (state, id) => {
      return state[id] || 0;
    },
  },
});
const selectCarSlice = (state) => state[cartSlice.name];
export const selectCartItems = createSelector([selectCarSlice], (cartSlice) =>
  Object.keys(cartSlice).reduce((acc, id) => {
    acc.push({ id, amount: cartSlice[id] });
    return acc;
  }, [])
);
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
