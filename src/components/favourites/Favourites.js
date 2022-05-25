// Redux
import { useSelector } from "react-redux";

// Components
import FavouriteCard from "./FavouriteCard";

// Data
import wishlistSvg from "../../assets/statistic/undraw_wishlist_re_m7tv.svg";

const Favourites = () => {
  const { allFaveProducts } = useSelector((state) => state.favourite);

  return (
    <section className="mx-auto mt-52 md:mx-3">
      <div className="mx-4 rounded bg-white p-7 shadow-md md:mx-auto md:max-w-4xl">
        <h4 className="flex items-center font-sans font-bold text-red-600 underline">
          Favourites :
        </h4>
        {allFaveProducts.length === 0 && (
          <div className="flex flex-col p-10">
            <img
              src={wishlistSvg}
              alt="wishlist"
              className="mx-auto h-auto w-60"
            />
            <div className="mt-4 text-center text-sm font-bold text-red-200">
              No favourite product selected !
            </div>
          </div>
        )}
        {allFaveProducts?.map((product) => (
          <FavouriteCard
            key={product.id}
            title={product.title}
            image={product.image}
            category={product.category}
            price={product.price}
            rating={product.rating.rate}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Favourites;
