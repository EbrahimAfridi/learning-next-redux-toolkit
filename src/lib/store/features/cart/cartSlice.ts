import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface CartState {
  items: string[]
}

// Define the initial state using that type
const initialState: CartState = {
  items: []
}

export const CartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { add } = CartSlice.actions;

export default CartSlice.reducer;
