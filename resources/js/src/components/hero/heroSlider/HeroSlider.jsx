// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "./hero-slider.css";

const HeroSlider = ({
    title1,
    span1,
    title2,
    span2,
    desc,
    heroImg,
    heroStyle,
}) => {
    return (
        <main className="container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide className={heroStyle}>
                    <div className="hero-slider-content">
                        <h1>
                            {title1}
                            <span> {span1}</span>
                            <br />
                            {title2}
                            <span> {span2}</span>
                        </h1>
                        <p>{desc}</p>
                    </div>
                    <div className="hero-slider-right">
                        <div className="hero-img">
                            <img src={heroImg} alt="" className="hero-person" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    );
};
export default HeroSlider;
