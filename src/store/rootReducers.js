// All Slices
import product from "../components/products/store/index";
import favourite from "./favouritesSlice";
import cart from "./cartSlice";
import element from "../Ui/store/index";

const rootReducer = { favourite, product, cart, element };

export default rootReducer;
