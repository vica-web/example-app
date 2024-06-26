import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "./hero-slider.css";

const HeroSlider = ({
    title1_1,
    span1_1,
    title1_2,
    span1_2,
    title2_1,
    span2_1,
    title2_2,
    span2_2,
    desc,
    desc2,
    heroImg,
    heroImg2,
    heroStyle,
}) => {
    return (
        <main className="container">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 10000,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide className={heroStyle}>
                    <div className="hero-slider-content">
                        <h1>
                            {title1_1}
                            <span> {span1_1}</span>
                            <br />
                            {title1_2}
                            <span> {span1_2}</span>
                        </h1>
                        <p>{desc}</p>
                    </div>
                    <div className="hero-slider-right">
                        <div className="hero-img">
                            <img
                                src={heroImg}
                                alt="Hero Img"
                                className="hero-person"
                                fetchpriority="high"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={heroStyle}>
                    <div className="hero-slider-content">
                        <h1>
                            {title2_1}
                            <span> {span2_1}</span>
                            <br />
                            {title2_2}
                            <span> {span2_2}</span>
                        </h1>
                        <p>{desc2}</p>
                    </div>
                    <div className="hero-slider-right">
                        <div className="hero-img">
                            <img
                                src={heroImg2}
                                alt="Hero Img"
                                className="hero-person"
                                fetchpriority="low"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    );
};
export default HeroSlider;
