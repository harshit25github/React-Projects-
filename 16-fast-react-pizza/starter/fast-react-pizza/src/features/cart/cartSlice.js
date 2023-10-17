import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload -> newItem and an Object
      const alreadyHavePizz = state.cart.find((item) => item.pizzaId === action.payload.pizzaId);
      if (!alreadyHavePizz) {
        state.cart.push(action.payload);
        return;
      }

      alreadyHavePizz.quantity++;
      alreadyHavePizz.totalPrice = alreadyHavePizz.unitPrice * alreadyHavePizz.quantity;
    },
    deleteItem(state, action) {
      // payload -- > Id
      state.cart = state.cart.filter((pizza) => pizza.pizzaId !== action.payload);
    },
    increaseItemQuatity(state, action) {
      //payload is ID
      const pizzaItem = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      pizzaItem.quantity++;
      pizzaItem.totalPrice = pizzaItem.unitPrice * pizzaItem.quantity;
    },
    decreaseItemQuatity(state, action) {
      //payload is ID
      const pizzaItem = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      pizzaItem.quantity >= 1 && pizzaItem.quantity--;
      pizzaItem.totalPrice = pizzaItem.unitPrice * pizzaItem.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, decreaseItemQuatity, deleteItem, increaseItemQuatity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalQuatity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// reselect --- library
