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
    <section className="mx-auto mt-40 w-full p-6 md:mt-40 md:p-24 lg:w-[60rem]">
      <div className="relative flex h-auto flex-col rounded-md bg-white p-3 shadow-md md:flex-row md:p-6">
        <div className="m-auto flex w-full justify-center p-2  md:w-1/3">
          <img
            src={image}
            alt={"product" + id}
            className="h-52 w-40 object-contain md:w-full"
          />
        </div>
        <div className="mb-2 flex w-full flex-col p-3 md:ml-4 md:w-2/3">
          <h3 className="font-sans text-lg font-bold">{title}</h3>
          <span className="mt-1 mb-3 text-base font-semibold text-slate-400">
            Product-Code : {category}-{id}
          </span>
          <p className="text-base font-thin leading-6">
            <strong>{count}</strong> available in storage
          </p>
          <div className="my-2 flex content-center  items-center">
            <p className="flex text-sm font-bold">
              Price :
              <span className="ml-1">
                <PriceBadge>{price}</PriceBadge>
              </span>
            </p>
            <div className="ml-6">
              <RatingBadge>{rate}</RatingBadge>
            </div>
          </div>
          <h4 className="my-2 font-sans text-xl font-bold text-red-300 underline underline-offset-4">
            Descriptions :
          </h4>
          <p className="text-justify text-base font-normal">
            {description}
          </p>
          <div className="my-5 flex items-center justify-start">
            <FavouriteBtn id={id} />
            <CartBtn id={id} />
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-3 right-3 flex items-center justify-center rounded-md border border-red-300 px-8 py-2 font-bold text-red-300 shadow-md transition-all duration-200 ease-linear hover:bg-red-500 hover:text-white md:px-2"
        >
          Return
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
