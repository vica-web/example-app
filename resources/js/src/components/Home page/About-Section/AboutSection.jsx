import MainHeader from "../../General/main-header/MainHeader";
import "./about-section.css";
const AboutSection = () => {
    return (
        <div className="about-section container">
            <MainHeader firstTitle="About" secondTitle=" Vica" />
            <div className="about-content">
                <div className="about-desc">
                    <div className="about-desc-top">
                        <p>
                            At Vica Web Solutions, our mission is twofold: to
                            deliver exceptional web development services and to
                            equip individuals with the knowledge and skills
                            required for success in the ever-evolving digital
                            landscape. We strive to bridge the gap between
                            technology and education, fostering growth and
                            innovation.
                        </p>
                    </div>
                    <div className="about-desc-bottom">
                        <div>
                            <h3>
                                Our <span>vision</span>
                            </h3>
                            <p>
                                Our vision is to be a leading force in the
                                digital landscape, empowering businesses to
                                thrive through innovative web solutions and
                                individuals to excel through comprehensive web
                                development training.
                            </p>
                        </div>
                        <div>
                            <h3>
                                Our <span>message</span>
                            </h3>
                            <p>
                                We seek to gain the superiority to qualify
                                software staffs effectively ,and with high
                                productivity and professionalism to enhance the
                                programming skills in the programming labor
                                market.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-img">
                        <img
                            src="/about-logo.png"
                            alt="Vica Logo"
                            className="about-img-vica"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
