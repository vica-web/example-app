// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./contact-banner.css";
import { socialData } from "../../data/contactData";

const ContactBanner = () => {
    return (
        <div className="hero-banner">
            <div className="left">
                <p>
                    We use and teach a lot of programming languages and
                    techniques.
                </p>
            </div>
            <div className="right">
                <Swiper
                    className="banner-slider"
                    loop={true}
                    autoplay={{ delay: 0 }}
                    slidesPerView={4} // added
                    speed={7000}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                        // 768: {
                        //     slidesPerView: 6,
                        //     spaceBetween: 30,
                        // },
                    }}
                >
                    {socialData.map((social) => {
                        return (
                            <SwiperSlide
                                className="banner-slide"
                                key={social.socialId}
                            >
                                <div className="banner-slide-item">
                                    <img
                                        src={social.socialImg}
                                        alt={social.socialName}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default ContactBanner;
