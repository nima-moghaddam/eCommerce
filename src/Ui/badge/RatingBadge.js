// svg
import startSvg from "../../assets/star.svg";

const RatingBadge = ({ children }) => {
  return (
    <div className="flex scale-75  rounded bg-slate-100 p-1 align-middle shadow-md shadow-gray-200">
      <span className="m-auto">{children}</span>
      <img src={startSvg} alt="rating" className="w-6" />
    </div>
  );
};

export default RatingBadge;
