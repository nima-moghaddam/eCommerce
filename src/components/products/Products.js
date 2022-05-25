// React
import { useEffect, useState } from "react";

// React Router
import { useParams } from "react-router-dom";

// Components
import ProductCard from "./ProductCard";
import Sidebar from "./sidebar";
import FilterModal from "./modal";

//Redux
import { setCurrentProducts } from "./store";
import { useDispatch, useSelector } from "react-redux";

// Data
import nodataSvg from "../../assets/product/undraw_empty_cart_co35.svg";
import gearSvg from "../../assets/product/gear.svg";

const Products = () => {
  const [showMenu, setShowMenu] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();

  const categoryName = params.category_name;

  const { currentProducts } = useSelector((state) => state.product);

  const toggleFilterMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    dispatch(setCurrentProducts(categoryName));
  }, [dispatch, categoryName]);

  return (
    <section className="mt-48 md:mt-28">
      <div className="flex flex-row">
        <div className="hidden h-full w-96 md:block">
          <Sidebar />
        </div>

        <button
          onClick={toggleFilterMenu}
          className="fixed left-4 top-2/4 z-30 block rounded-full bg-slate-200 p-1 shadow-inner shadow-red-400 md:hidden"
        >
          <img src={gearSvg} alt="filter" className="w-8 animate-spin" />
        </button>
        {showMenu && <FilterModal closeModal={toggleFilterMenu} />}

        {currentProducts.length === 0 ? (
          <div className="flex w-full flex-col items-center justify-center p-10">
            <img
              src={nodataSvg}
              alt="noData"
              className="mb-4 h-auto w-1/2 md:w-1/4"
            />
            <span className="text-center font-sans text-base font-bold text-red-400">
              No Data To Display !
            </span>
          </div>
        ) : (
          <div className="mx-5 grid w-full grid-flow-row grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {currentProducts.map((proudct) => (
              <ProductCard
                key={proudct.id}
                id={proudct.id}
                image={proudct.image}
                price={proudct.price}
                rating={proudct.rating.rate}
                count={proudct.rating.count}
                title={proudct.title}
                isFav={proudct.favourite}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
