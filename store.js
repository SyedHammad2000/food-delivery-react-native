import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlices";
import { ResturantSlice } from "./slices/ResturantSlices";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    resturant: ResturantSlice.reducer,
  },
});
