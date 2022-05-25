// React
import { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// Ui element
import IconWrapper from "./../Ui/IconWrapper";

// Redux
import { useSelector } from "react-redux";

// Data
import { categories } from "./../data/data";
import cartSvg from "../assets/shopping-cart-fill.svg";
import favSvg from "../assets/heart-fill.svg";
import menuSvg from "../assets/menu-line.svg";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const { allFaveProducts } = useSelector((state) => state.favourite);
  const { cart } = useSelector((state) => state.cart);

  const faveItemNumber = allFaveProducts.length;
  const cartNumber = cart.length;

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="fixed top-0 z-30 flex w-full flex-col  items-center bg-slate-50 p-4 shadow-md md:h-auto md:flex-row md:justify-between">
      <div className="mx-auto flex flex-row">
        <Link to={"/"}>
          <h1 className="mx-auto mb-3 w-44 cursor-pointer whitespace-nowrap bg-slate-100 p-2 text-center text-base font-extrabold text-red-600 shadow-md transition-all duration-200 ease-linear hover:shadow-red-300 md:mb-0 md:w-52 md:text-xl">
            eCommerce Shope
          </h1>
        </Link>
        <div className="mx-auto mb-5 flex md:ml-2 md:mb-0 ">
          <IconWrapper url={"/cart"} badgeNumber={cartNumber}>
            <img src={cartSvg} alt="cart" className="w-5" />
          </IconWrapper>
          <IconWrapper url={"/favourites"} badgeNumber={faveItemNumber}>
            <img src={favSvg} alt="fave" className="w-5" />
          </IconWrapper>
        </div>
      </div>
      <button
        onClick={handleOpenNav}
        className="hover: my-auto flex cursor-pointer flex-row rounded-2xl border border-red-200 bg-slate-100 py-1 px-2 shadow-md transition-all  duration-200 ease-linear hover:shadow-red-400 md:hidden"
      >
        <img src={menuSvg} alt="menu" className="mx-1 w-5" />
        <span className="font-semibold text-red-500">Menu</span>
      </button>
      <nav
        className={`${
          openNav ? "block" : "hidden"
        } w-full md:mx-auto md:block md:w-auto`}
      >
        <ul className="flex w-full flex-col items-end whitespace-nowrap md:flex-row md:items-center">
          {categories.map((category, index) => (
            <li
              key={index}
              className="mb-2 font-serif text-base text-slate-700 decoration-slate-50 transition-all duration-300 ease-linear hover:scale-105 hover:underline hover:decoration-red-300/50 hover:underline-offset-8 md:mb-0 md:ml-3"
            >
              <Link to={category.url}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
