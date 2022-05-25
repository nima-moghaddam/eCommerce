// Redux
import { createSlice, current } from "@reduxjs/toolkit";

// Data
import { data } from "../data/data";

const favouritSlice = createSlice({
  name: "favourite",
  initialState: {
    allFaveProducts: [],
  },
  reducers: {
    toggleProductFavour(state, action) {
      const id = action.payload;

      const selectedProduct = data.find((product) => product.id === id);

      const isProductExist = state.allFaveProducts.some(
        (product) => product.id === id
      );

      if (!isProductExist) {
        state.allFaveProducts.push(selectedProduct);
      } else {
        const updatedArray = state.allFaveProducts.filter(
          (product) => product.id !== id
        );
        state.allFaveProducts = [...updatedArray];
      }
    },
    removeProductFavour(state, action) {
      const id = action.payload;

      const updatedArray = state.allFaveProducts.filter(
        (product) => product.id !== id
      );
      state.allFaveProducts = [...updatedArray];
    },
  },
});

export const { toggleProductFavour, removeProductFavour } =
  favouritSlice.actions;
export default favouritSlice.reducer;
