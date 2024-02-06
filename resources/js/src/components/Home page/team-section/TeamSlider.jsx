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
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    850: {
                        slidesPerView: 2,
                    },
                }}
            >
                {coachData.map((coach) => {
                    return (
                        <SwiperSlide key={coach.coachId} className="team-slide">
                            <div className="team-slide-content">
                                <div className="team-slide-img">
                                    <div className="team-slide-img-container">
                                        <img
                                            src="/ourTeamCircle.png"
                                            alt=""
                                            className="our-team-circle"
                                        />
                                        <img
                                            src={coach.coachImg}
                                            alt=""
                                            className="team-person"
                                        />
                                        <div className="box">
                                            <img src="/beforeTeam.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-text">
                                <h4>
                                    {coach.coachFirstName}{" "}
                                    <span>{coach.coachLastName}</span>
                                </h4>
                                <p>{coach.coachPosition}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default TeamSlider;
