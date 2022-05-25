// Swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiperStyles.css";

// Data
import { data } from "./../../data/data";
import arrowdownSvg from "../../assets/arrow-down-line.svg";

// Components
import SliderCard from "./SliderCard";

// UI elements
import TitleWrapper from "../../Ui/TitleWrapper";

const cloneArr = [...data];

const maxRatingArr = cloneArr.sort((a, b) => {
  return b.rating.rate - a.rating.rate;
});

const topRatedItems = maxRatingArr.splice(0, 8);

const Slider = () => {
  return (
    <>
      <TitleWrapper>
        Top Rated Products
        <img src={arrowdownSvg} alt="arrow" className="mt-1 animate-bounce" />
      </TitleWrapper>
      <div className="mx-1 p-2">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
        >
          {topRatedItems.map((product) => (
            <SwiperSlide key={product.id}>
              <SliderCard
                img={product.image}
                price={product.price}
                rate={product.rating.rate}
                title={product.title}
                id={product.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
