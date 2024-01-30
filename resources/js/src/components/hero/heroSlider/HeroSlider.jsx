// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./hero-slider.css";

const HeroSlider = () => {
    return (
        <main className="slider-container container">
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
                <SwiperSlide className="hero-slider">
                    <div className="hero-slider-content">
                        <h1>
                            We Create
                            <span> Solutions</span>
                            <br />
                            for your web
                            <span> Business</span>
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, praesentium.
                        </p>
                    </div>
                    <div className="hero-slider-right">
                        <div className="hero-temp">
                            <img
                                src="/temp.png"
                                alt=""
                                className="hero-person"
                            />
                        </div>
                        <img src="/Frame.svg" alt="" className="hero-frame" />
                        <img src="/frame2.png" alt="" className="hero-frame2" />
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide
                    style={{
                        height: "500px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <h1>We Create Solutions for your web Business</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorem, praesentium.
                    </p>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        height: "500px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <h1>We Create Solutions for your web Business</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorem, praesentium.
                    </p>
                </SwiperSlide> */}
            </Swiper>
        </main>
    );
};
export default HeroSlider;
