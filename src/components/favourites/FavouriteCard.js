// UI
import PriceBadge from "./../../Ui/badge/PriceBadge";
import RatingBadge from "./../../Ui/badge/RatingBadge";
import CloseBtn from "./../../Ui/button/CloseBtn";

// React Router
import { useNavigate } from "react-router-dom";

// Redux
import { removeProductFavour } from "../../store/favouritesSlice";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../Ui/store";

const FavouriteCard = ({ title, image, category, price, rating, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseFave = () => {
    dispatch(removeProductFavour(id));
    dispatch(toggleFavourite(id));
  };

  return (
    <div className="my-7 mx-2 flex h-72 flex-col items-center justify-between rounded border border-slate-200 p-4 shadow-md shadow-slate-300 md:mx-auto md:h-36 md:max-w-md md:flex-row">
      <div className="m-auto mb-2 basis-1/6 md:my-auto md:mr-5">
        <img src={image} alt={title} className="h-14 w-14" />
      </div>
      <div className="flex basis-3/6 flex-col">
        <span className="mb-3 text-center font-sans text-sm font-bold md:text-left">
          Category:{" "}
          <span className="font-sans text-sm font-normal">{category}</span>
        </span>
        <p className="text-center font-sans text-sm font-semibold text-gray-600 md:text-left">
          {title}
        </p>
      </div>
      <div className="flex basis-1/6 flex-row items-center md:flex-col">
        <RatingBadge>{rating}</RatingBadge>
        <PriceBadge>{price}$</PriceBadge>
      </div>
      <span className="mt-2 flex basis-1/6 items-center justify-center md:flex-col">
        <CloseBtn id={id} handleClose={handleCloseFave} />
        <button
          className="rounded bg-red-200 p-1 font-sans text-sm font-semibold text-white shadow transition-all duration-200 ease-linear hover:bg-red-500 md:mt-6"
          onClick={() => navigate(`/details/${id}`)}
        >
          Details
        </button>
      </span>
    </div>
  );
};

export default FavouriteCard;
