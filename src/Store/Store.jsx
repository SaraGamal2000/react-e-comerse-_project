import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/slices/Cartslices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
