import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      if (!existingItem) {
        state.items.push({
          id: newitem.id,
          img: newitem.img,
          name: newitem.name,
          author: newitem.author,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity += 1;
      state.totalPrice += newitem.price;
    },
    removeToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== existingItem.id
          );
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
        state.totalPrice -= newitem.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
