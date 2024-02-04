// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./team-section.css";
import { coachData } from "../../../data/teamData";

const TeamSlider = () => {
    return (
        <div className="team-slider">
            <Swiper
                className="team-swiper"
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1} // added
                // slidesPerGroup={3}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    850: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
            >
                {coachData.map((coach) => {
                    return (
                        <SwiperSlide key={coach.coachId} className="team-slide">
                            <div className="team-slide-img">
                                <img
                                    src={coach.coachImg}
                                    alt=""
                                    className="team-person"
                                />
                                <div className="progress-bar">
                                    <progress
                                        value="25"
                                        min="0"
                                        max="100"
                                        style={{
                                            visibility: "hidden",
                                            width: "0",
                                            height: "0",
                                        }}
                                    ></progress>
                                </div>
                            </div>
                            <div className="team-text">
                                <h4>{coach.coachName}</h4>
                                <p>{coach.coachPosition}</p>
                            </div>
                            {/* <div className="team-icons">
                        <img src="/t-facebook.png" alt="Facebook Icon" />
                        <img src="/t-instagram.png" alt="Instagram Icon" />
                        <img src="/t-telegram.png" alt="Telegram Icon" />
                    </div> */}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default TeamSlider;
