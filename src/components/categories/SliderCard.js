// React Router
import { useNavigate } from "react-router-dom";

// Ui
import PriceBadge from "./../../Ui/badge/PriceBadge";
import RatingBadge from "./../../Ui/badge/RatingBadge";

const SliderCard = ({ img, rate, price, title, id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center rounded-md bg-white p-1 align-middle shadow-md">
      <img src={img} alt={title} className="h-44 w-full object-contain p-2" />
      <div className="my-4 flex justify-around font-serif text-xs">
        <PriceBadge>{price}</PriceBadge>
        <RatingBadge>{rate}</RatingBadge>
      </div>
      <button
        className="mx-3 my-4 rounded border border-red-500 p-1 font-sans font-bold text-red-500 shadow shadow-red-300 transition-all duration-200 ease-linear hover:bg-red-500 hover:text-white hover:shadow-white md:mx-8 lg:mx-14"
        onClick={() => navigate(`details/${id}`)}
      >
        Details
      </button>
    </div>
  );
};

export default SliderCard;