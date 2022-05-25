// Svg
import favOutlineSvg from "../../assets/product/heart-outline.svg";
import favFillSvg from "../../assets/product/heart-fill.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleProductFavour } from "../../store/favouritesSlice";
import { toggleFavourite } from "../store";

const FavouriteBtn = ({ id }) => {
  const { appState } = useSelector((state) => state.element);
  const dispatch = useDispatch();

  const currentIndex = appState.findIndex((item) => item.id === id);
  const { isFavour } = appState[currentIndex];

  const handleAddToFavourites = () => {
    dispatch(toggleProductFavour(id));
    dispatch(toggleFavourite(id));
  };

  return (
    <button
      onClick={handleAddToFavourites}
      className="mx-2 flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-slate-50  p-1 shadow-red-400 transition-all duration-200 ease-linear hover:shadow-inner hover:shadow-red-400"
    >
      <img
        src={isFavour ? favFillSvg : favOutlineSvg}
        alt="fave_outline_Icon"
      />
    </button>
  );
};

export default FavouriteBtn;
