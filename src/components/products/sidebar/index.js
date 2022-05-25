// Components
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import ConditionFilter from "./ConditionFilter";

// Redux
import { useDispatch } from "react-redux";
import { handleReset } from "../store";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(handleReset());
  };

  return (
    <div className="relative flex h-full w-full flex-col rounded bg-white p-10 shadow-md">
      <PriceFilter />
      <RatingFilter />
      <ConditionFilter />
      <button
        onClick={handleResetFilters}
        className="absolute bottom-2 right-2 rounded bg-red-200 py-1 px-2 text-white shadow transition-all duration-200 ease-linear hover:bg-red-400"
      >
        Reset
      </button>
    </div>
  );
};

export default Sidebar;
