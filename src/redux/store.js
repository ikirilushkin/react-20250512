import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./entities/dishes/slice";
import { reviewsSlice } from "./entities/reviews/slice";
import { usersSlice } from "./entities/users/slice";
import { cartSlice } from "./entities/cart/slice";
import { restaurantsSlice } from "./entities/restaurants/slice";

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
