//Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSendToCart } from "../../store/cartSlice";
import { toggleInCart } from "../store";

// Svg
import CartSvg from "../../assets/product/shopping-cart-line.svg";
import CartfilledSvg from "../../assets/product/shopping-cart-fill.svg";

const CartBtn = ({ id }) => {
  const { appState } = useSelector((state) => state.element);
  const dispatch = useDispatch();

  const currentIndex = appState.findIndex((item) => item.id === id);
  const { inCart } = appState[currentIndex];

  const handleAddToCart = () => {
    dispatch(toggleSendToCart(id));
    dispatch(toggleInCart(id));
  };
  return (
    <button
      onClick={handleAddToCart}
      className="mx-2 flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-slate-50 p-1 shadow-red-400 transition-all duration-200 ease-linear hover:shadow-inner hover:shadow-red-400"
    >
      <img
        src={inCart ? CartfilledSvg : CartSvg}
        alt="fave_outline_Icon"
      />
    </button>
  );
};

export default CartBtn;
