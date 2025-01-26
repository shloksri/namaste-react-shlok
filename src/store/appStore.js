import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer, //app's big reducer
    //user: userReducer, //we can add as many reducers as we can.
  },
});

export default appStore;
