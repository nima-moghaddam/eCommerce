//React Router
import { Link } from "react-router-dom";

const Category = ({ name, image }) => {
  return (
    <Link to={`category/${name}`}>
      <div className="flex h-44 cursor-pointer flex-col justify-center rounded-md bg-white p-5 align-middle shadow-md transition duration-300 md:h-72 ease-linear hover:scale-105 hover:shadow-lg">
        <img src={image} alt={name} className="h-20 md:h-44 w-full object-contain" />
        <span className="mt-5 text-center font-serif text-lg font-semibold text-slate-600">
          {name}
        </span>
      </div>
    </Link>
  );
};

export default Category;
