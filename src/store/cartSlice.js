// Redux
import { createSlice } from "@reduxjs/toolkit";

// Data
import { data } from "../data/data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    resetCart(state) {
      state.totalPrice = 0;
      state.cart.map(
        (product) => (state.totalPrice = state.totalPrice + product.price)
      );
    },
    toggleSendToCart(state, action) {
      const id = action.payload;

      const selectedProduct = data.find((product) => product.id === id);

      const isProductExist = state.cart.some(
        (product) => product.id === id
      );

      if (!isProductExist) {
        state.cart.push(selectedProduct);
        state.totalPrice = state.totalPrice + selectedProduct.price;
      } else {
        const updatedArray = state.cart.filter(
          (product) => product.id !== id
        );

        state.totalPrice = state.totalPrice - selectedProduct.price;
        state.cart = [...updatedArray];
      }
    },
    incrementToCart(state, action) {
      const price = action.payload;

      console.log(price);

      state.totalPrice = state.totalPrice + price;
    },
    decrementToCart(state, action) {
      const price = action.payload;

      state.totalPrice = state.totalPrice - price;
    },
    removeFromCart(state, action) {
      const { id, calculatedPrice } = action.payload;

      const updatedArray = state.cart.filter(
        (product) => product.id !== id
      );
      state.cart = [...updatedArray];
      state.totalPrice = parseInt(state.totalPrice) - calculatedPrice;
    },
  },
});

export const {
  toggleSendToCart,
  removeFromCart,
  incrementToCart,
  decrementToCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
