import cartReducer from "@/redux/Slices/navSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
