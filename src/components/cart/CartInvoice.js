// Redux
import { useSelector } from "react-redux";

// React
import { useState } from "react";

// Data
import loaderSvg from "../../assets/statistic/loader.svg";

const CartInvoice = () => {
  const [loading, setLoading] = useState(false);
  const { totalPrice } = useSelector((state) => state.cart);

  const caculatedTotalPrice = parseInt(
    (Math.round(totalPrice * 100) / 100).toFixed(2)
  );

  const handleSendData = () => {
    setLoading(true);

    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="flex flex-row items-center justify-between p-1 md:flex-col md:items-start md:p-5">
      <div className="flex flex-col">
        <h2 className="mb-2 font-bold text-red-500 underline underline-offset-2">
          Checkout List :
        </h2>
        <div className="mb-1 flex flex-row items-center">
          <span className="mr-3 text-lg font-extrabold">
            Total Price :
          </span>
          <span>${caculatedTotalPrice}</span>
        </div>
        {/* <div className="mb-4 flex flex-row items-center text-gray-500">
          <span className="mr-3 text-xs font-extrabold ">
            Total Product Selected :
          </span>
          <span>3</span>
        </div> */}
      </div>
      <button
        onClick={handleSendData}
        className="flex flex-row items-center justify-center rounded bg-red-400 p-2 px-8 text-lg font-bold text-white transition-all duration-200 ease-linear hover:bg-red-600 md:w-full"
      >
        {loading ? (
          <>
            <span className="mr-1">Submitting</span>
            <img
              alt="loader"
              src={loaderSvg}
              className="w-6 animate-spin"
            />
          </>
        ) : (
          <span>Purchase</span>
        )}
      </button>
    </div>
  );
};

export default CartInvoice;
