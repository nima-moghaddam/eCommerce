// React Router
import { Link } from "react-router-dom";

// Ui
import PriceBadge from "../../Ui/badge/PriceBadge";
import FavouriteBtn from "./../../Ui/button/FavouriteBtn";
import CartBtn from "./../../Ui/button/CartBtn";
import RatingBadge from "./../../Ui/badge/RatingBadge";

const ProductCard = ({ image, price, count, title, id, rating }) => {
  return (
    <div className="flex max-h-80 cursor-pointer flex-col rounded bg-white p-1 shadow-md transition-all duration-300 ease-linear hover:scale-105 md:p-1">
      <Link to={`/details/${id}`}>
        <div className="my-3 flex w-full justify-center">
          <img src={image} alt={title} className="h-28 w-24" />
        </div>
        <p className="mx-2 mb-3 truncate text-center font-serif text-sm text-gray-600 md:text-lg ">
          {title}
        </p>
        <div className="mb-2 flex justify-around">
          <p className="whitespace-nowrap text-sm font-thin leading-6 md:text-base">
            only <strong>{count}</strong> in storage
          </p>
        </div>
        <div className="flex flex-row items-center justify-around mb-1">
          <RatingBadge>{rating}</RatingBadge>
          <PriceBadge>{price}</PriceBadge>
        </div>
      </Link>
      <div className="mb-2 flex justify-center p-2">
        <CartBtn id={id} />
        <FavouriteBtn id={id} />
      </div>
    </div>
  );
};

export default ProductCard;
