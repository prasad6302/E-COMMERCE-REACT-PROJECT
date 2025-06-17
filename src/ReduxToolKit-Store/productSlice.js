import { createSlice } from "@reduxjs/toolkit";

const sliceProducts = createSlice({
  name: "productsOfCreateslice",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity || 1; 
      } else {
        state.cart.push({ ...action.payload, quantity: quantity || 1 });
      }
    },


  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = sliceProducts.actions;
export default sliceProducts.reducer;
