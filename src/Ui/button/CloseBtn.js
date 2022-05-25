// Svg
import closeSvg from "../../assets/close-fill.svg";

const CloseBtn = ({ handleClose, icon }) => {
  return (
    <button
      className="mx-2 flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-slate-50 p-1 shadow-red-400 transition-all duration-200 ease-linear hover:shadow-inner hover:shadow-red-400"
      onClick={handleClose}
    >
      <img src={icon ? icon : closeSvg} alt="fave_outline_Icon" />
    </button>
  );
};

export default CloseBtn;
