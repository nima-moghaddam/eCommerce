// Redux
import { createSlice } from "@reduxjs/toolkit";

// Data
import { data } from "../../../data/data";

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProducts: [],
    category: null,
  },
  reducers: {
    setCurrentProducts(state, action) {
      const categoryName = action.payload;

      state.currentProducts = data.filter(
        (product) => product.category === categoryName
      );

      state.category = categoryName;
    },
    handlePrice(state, action) {
      const filterValue = action.payload;

      const minValue = filterValue[0];
      const maxValue = filterValue[1];

      const currentProduct = data.filter(
        (product) => product.category === state.category
      );

      const filteredPrice = currentProduct.filter(
        (product) => minValue < product.price && product.price < maxValue
      );

      state.currentProducts = [...filteredPrice];
    },
    handleRating(state, action) {
      const id = action.payload;

      const currentProduct = data.filter(
        (product) => product.category === state.category
      );

      const filteredRating = currentProduct.filter(
        (product) => product.rating.rate > id
      );

      state.currentProducts = [...filteredRating];
    },
    handleStockFilter(state, action) {
      const checked = action.payload;

      const currentProduct = data.filter(
        (product) => product.category === state.category
      );

      let filteredStock;

      if (checked === true) {
        filteredStock = currentProduct;
      } else {
        filteredStock = currentProduct.filter(
          (product) => product.rating.count !== 0
        );
      }
      state.currentProducts = [...filteredStock];
    },
    handleReset(state) {
      state.currentProducts = data.filter(
        (product) => product.category === state.category
      );
    },
  },
});

export const {
  handlePrice,
  setCurrentProducts,
  handleRating,
  handleReset,
  handleStockFilter,
} = productSlice.actions;

export default productSlice.reducer;
