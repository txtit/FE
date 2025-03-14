import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../assets/Carousel.css";

const Carousel = () => {
  return (
    <section className="blog card">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* Carousel */}
            <div
              id="Carousel2"
              className="shadow-soft border border-[#e6e7ee] p-4 rounded box-shadowv2 "
            >
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }} // Tự động chuyển slide sau 3 giây
                loop={true} // Lặp vô hạn
                onSwiper={swiper => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <img
                    className="d-block w-full"
                    src="https://demo.themesberg.com/neumorphism-ui/assets/img/carousel/image-1.jpg"
                    alt="First slide"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="d-block w-full"
                    src="https://demo.themesberg.com/neumorphism-ui/assets/img/carousel/image-2.jpg"
                    alt="Second slide"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="d-block w-full"
                    src="https://demo.themesberg.com/neumorphism-ui/assets/img/carousel/image-3.jpg"
                    alt="Third slide"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* End of Carousel */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
