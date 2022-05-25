// React
import { useState } from "react";

// UI
import CloseBtn from "./../../Ui/button/CloseBtn";

// Data
import deleteSvg from "../../assets/statistic/delete-bin-line.svg";

// Redux
import {
  removeFromCart,
  incrementToCart,
  decrementToCart,
} from "../../store/cartSlice";
import { toggleInCart } from "../../Ui/store";
import { useDispatch } from "react-redux";

const CartItem = ({ title, image, category, price, id }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const totalPrice = price * count;
  const calculatedPrice = parseInt(
    (Math.round(totalPrice * 100) / 100).toFixed(2)
  );

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ id, calculatedPrice }));
    dispatch(toggleInCart(id));
  };

  const handleItemCountOnchange = (e) => {
    const value = e.target.value;

    console.log(value);
  };

  const addItem = () => {
    setCount((state) => state + 1);
    dispatch(incrementToCart(price));
  };

  const subtractItem = () => {
    setCount((state) => (state === 1 ? 1 : state - 1));
    if (count > 1) dispatch(decrementToCart(price));
  };

  return (
    <div className="my-3 mx-auto flex flex-col rounded border border-slate-200 p-4 shadow-md shadow-slate-200 md:flex-row md:p-10">
      <div className="mr-5 flex items-center justify-center p-1">
        <img alt={category + id} src={image} className="h-24 w-24" />
      </div>
      <div className="flex w-full flex-col p-3">
        <p className="text-sm font-bold">{title}</p>
        <span className="mt-1 mb-3 text-xs font-semibold text-slate-400">
          Product-Code : {category}-{id}
        </span>
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-center">
          <div className="mb-4 flex flex-row items-center justify-around md:mb-0">
            <span className="mr-3 text-sm font-bold">Price :</span>
            <span>${calculatedPrice}</span>
          </div>
          <div className="mx-auto flex items-center justify-center rounded-md border border-red-200 bg-slate-50 px-2 shadow shadow-red-200">
            <button
              onClick={subtractItem}
              className="mx-2 mb-1 flex items-center justify-center text-2xl font-bold text-red-500"
            >
              -
            </button>
            <input
              type="number"
              className="w-7 rounded text-center shadow shadow-red-200 outline-none"
              min={0}
              value={count}
              onChange={handleItemCountOnchange}
            />
            <button
              onClick={addItem}
              className="mx-2 flex items-center justify-center text-center text-lg font-bold text-red-500"
            >
              +
            </button>
            <CloseBtn
              icon={deleteSvg}
              handleClose={removeFromCartHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
