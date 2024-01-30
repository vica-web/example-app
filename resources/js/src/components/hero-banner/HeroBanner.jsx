// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./hero-banner.css";

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <div className="left">
                <p>
                    Helped more than 11+ companies to reach there business goals
                </p>
            </div>
            <div className="right">
                <Swiper
                    className="sample-slider"
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 0 }}
                    slidesPerView={2} // added
                    speed={7000}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="banner-slider">
                        <img src="/figma.png" alt="" />
                        <img src="/figma.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HeroBanner;
