// Redux
import { useDispatch } from "react-redux";
import { handleRating } from "../store/index";

// Data
import starSvg from "../../../assets/star.svg";

const ratingRange = [1, 2, 3, 4];

const RatingFilter = () => {
  const dispatch = useDispatch();

  const handleRatingFilter = (e) => {
    const id = e.target.id;

    dispatch(handleRating(id));
  };

  return (
    <div className="flex flex-col mb-7">
      <span className="mb-2 font-sans text-xs font-bold">Rating</span>
      <ul>
        {ratingRange.map((rating, index) => (
          <li
            key={index}
            className="flex cursor-pointer flex-row items-center text-sm hover:text-red-500"
            onClick={handleRatingFilter}
            id={rating}
          >
            <span id={rating}>{rating}</span>
            <img id={rating} src={starSvg} alt="star" className="w-7" />
            <span id={rating}>& Up</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingFilter;
