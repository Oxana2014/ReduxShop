import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  isShown: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    toggleCart(state) {
state.isShown = !state.isShown
    },
    addToCart(state, action) {
        const newItem = action.payload
      const index = state.items.findIndex((item) => item.id === newItem.id);
      if (index === -1) {
        state.items.push({...newItem, quantity : 1});
      } else {
        state.items[index].quantity++;
      }
    },
    removeFromCart(state, action) {
        const id = action.payload
      const index = state.items.findIndex((item) => item.id === id);
      if (index === -1) {
        console.log("Cart item not found");
      } else {
        if(state.items[index].quantity === 1) {
             state.items.splice(index, 1);
        } else {
            state.items[index].quantity--
        }
      }    
    },
  },
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer