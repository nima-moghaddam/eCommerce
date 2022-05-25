// Redux
import { createSlice } from "@reduxjs/toolkit";

// Data
import { data } from "../../data/data";

const appData = data.map((product) => ({
  id: product.id,
  inCart: false,
  isFavour: false,
}));

const elementsSlice = createSlice({
  name: "element",
  initialState: {
    appState: appData,
  },
  reducers: {
    toggleFavourite(state, action) {
      const id = action.payload;

      const currentProductIndex = state.appState.findIndex(
        (item) => item.id === id
      );

      state.appState[currentProductIndex].isFavour =
        !state.appState[currentProductIndex].isFavour;
    },
    toggleInCart(state, action) {
      const id = action.payload;

      const currentProductIndex = state.appState.findIndex(
        (item) => item.id === id
      );

      state.appState[currentProductIndex].inCart =
        !state.appState[currentProductIndex].inCart;
    },
  },
});

export const { toggleFavourite, toggleInCart } = elementsSlice.actions;
export default elementsSlice.reducer;
