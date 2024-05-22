import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

// store variable is a global variable. This should never be used in next js due to server side 
// rendering as it will be shared across all users

// Creating store per request, whenever this function is called a new store will be created.
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']