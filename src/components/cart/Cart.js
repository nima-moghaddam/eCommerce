// Redux
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../store/cartSlice";

// Components
import CartItem from "./CartItem";
import CartInvoice from "./CartInvoice";

// Data
import shoppingSvg from "../../assets/statistic/undraw_shopping_app.svg";

// React
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);

  return (
    <section className="mt-44 flex flex-row items-center justify-center">
      <div className="fixed bottom-0 left-0 w-full rounded border border-t-red-200 bg-white px-2 opacity-80 shadow-md md:w-80 md:border-r-red-200">
        <CartInvoice />
      </div>
      <div className="my-auto mx-3 w-auto rounded bg-white p-7 shadow-md">
        <h2 className="mb-6 font-bold text-red-600 underline underline-offset-1">
          Your Cart :
        </h2>
        {cart.length === 0 ? (
          <div className="flex flex-col py-3 px-10 md:px-28">
            <img
              alt="shopping"
              src={shoppingSvg}
              className="w-44 md:w-72 md:p-7"
            />
            <span className="text-center font-bold text-red-300">
              Cart Is Empty !
            </span>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                title={product.title}
                image={product.image}
                category={product.category}
                price={product.price}
                id={product.id}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
