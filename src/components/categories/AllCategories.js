// Components
import Category from "./Category";
import Slider from "./Slider";

// UI elements
import TitleWrapper from "./../../Ui/TitleWrapper";

// Data
import { categories } from "./../../data/data";
import arrowdownSvg from "../../assets/arrow-down-line.svg";

const AllCategories = () => {
  return (
    <section>
      <div className="mt-48 md:mt-28">
        <TitleWrapper>
          All Categories
          <img src={arrowdownSvg} alt="arrow" className="mt-1 animate-bounce" />
        </TitleWrapper>
        <div className="mx-3 mt-10 mb-20 grid grid-cols-2 gap-5 md:mx-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {categories.map((category, index) => (
            <Category key={index} name={category.name} image={category.img} />
          ))}
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </section>
  );
};

export default AllCategories;
