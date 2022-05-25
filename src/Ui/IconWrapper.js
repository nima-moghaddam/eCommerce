// React Router
import { useNavigate } from "react-router-dom";

const IconWrapper = ({ children, url, badgeNumber }) => {
  const navigate = useNavigate();

  const handleRoutes = () => {
    navigate(url);
  };

  return (
    <button
      onClick={handleRoutes}
      className="relative m-auto mx-2 flex cursor-pointer items-center justify-center rounded-full bg-slate-100 p-2 shadow-md transition-all duration-200 ease-linear hover:shadow-red-300"
    >
      <span className="absolute bottom-6 left-6 m-auto flex w-4 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
        {badgeNumber}
      </span>
      {children}
    </button>
  );
};

export default IconWrapper;
