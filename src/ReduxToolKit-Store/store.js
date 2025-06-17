import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, cartMiddlewareFn } from './productSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddlewareFn),
});


