// React Router
import { useParams, useNavigate } from "react-router-dom";

// Data
import { data } from "../../data/data";

// Ui
import PriceBadge from "../../Ui/badge/PriceBadge";
import RatingBadge from "../../Ui/badge/RatingBadge";
import FavouriteBtn from "../../Ui/button/FavouriteBtn";
import CartBtn from "./../../Ui/button/CartBtn";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const productId = params.product_detail;

  const currentProduct = data.find((product) => product.id == productId);

  const { id, category, description, image, price, title, rating } =
    currentProduct;

  const { count, rate } = rating;

  return (
    <section className="mt-48 p-6 md:mt-16 md:p-24">
      <div className="relative flex h-auto flex-col rounded bg-white p-3 shadow-md md:flex-row">
        <div className="m-auto flex w-full justify-center p-2  md:w-1/3">
          <img
            src={image}
            alt={"product" + id}
            className="h-52 w-40 object-contain md:w-full"
          />
        </div>
        <div className="mb-2 flex w-full flex-col p-3 md:ml-4 md:w-2/3">
          <h3 className="text-md font-mono font-bold">{title}</h3>
          <span className="mt-1 mb-3 text-xs font-semibold text-slate-400">
            Product-Code : {category}-{id}
          </span>
          <p className="text-xs font-thin leading-6">
            <strong>{count}</strong> available in storage
          </p>
          <div className="my-2 flex content-center  items-center">
            <p className="flex font-mono text-sm font-bold">
              Price :
              <span className="ml-1">
                <PriceBadge>{price}</PriceBadge>
              </span>
            </p>
            <div className="ml-6">
              <RatingBadge>{rate}</RatingBadge>
            </div>
          </div>
          <h4 className="my-2 font-mono font-bold text-red-300 underline underline-offset-2">
            Descriptions :
          </h4>
          <p className="text-justify text-xs font-normal">{description}</p>
          <div className="my-5 flex items-center justify-start">
            <FavouriteBtn id={id} />
            <CartBtn id={id} />
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-whiteshadow-md absolute bottom-2 right-2 rounded-sm border border-red-300 px-2 pb-1 font-bold text-red-300 transition-all duration-200 ease-linear hover:bg-red-500 hover:text-white"
        >
          Return
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
