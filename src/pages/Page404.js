// Data
import notfoundSvg from "../assets/404/undraw_page_not_found_re_e9o6.svg";

// React Router
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-56">
      <div className="m-auto flex flex-col justify-center align-middle">
        <img src={notfoundSvg} alt="404" className="m-auto h-auto w-64" />
        <p className="m-auto mt-5 font-serif text-2xl font-bold text-red-500">
          Page Not Found!
        </p>
        <button
          onClick={() => navigate("/")}
          className="m-auto mt-5 rounded bg-red-400 p-1 font-serif text-white transition-all duration-300 ease-linear hover:bg-red-600"
        >
          Go to Homepage
        </button>
      </div>
    </section>
  );
};

export default Page404;
