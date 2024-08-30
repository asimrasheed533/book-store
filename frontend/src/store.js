import { loadState, saveState } from "./utils/LocalStorage";

import cartReducer from "../src/features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const presistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: presistedState,
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});
