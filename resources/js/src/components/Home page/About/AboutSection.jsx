import MainHeader from "../../General/main-header/MainHeader";
import "./about-section.css";
const AboutSection = () => {
    return (
        <div className="about-section container">
            <MainHeader title={"about vica"} />
            <div className="about-content">
                <div className="about-desc">
                    <div className="about-desc-top">
                        <p>
                            High Star Logistics Company is a limited liability
                            company established in 2023 in Riyadh. It aims to
                            provide logistical services to companies, factories,
                            and government departments to help them with
                            transportation and logistical means in modern,
                            professional ways . We provide comprehensive
                            logistics solutions with a reduced cost and seek to
                            build strong relationships with our customers
                            through a work team that has experience, competence
                            and skill in the logistics field.
                        </p>
                    </div>
                    <div className="about-desc-bottom">
                        <div>
                            <h3>Our vision</h3>
                            <p>
                                We occupy a high leadership position in the
                                Kingdom and the Arabian Gulf as a company that
                                provides full services and harnesses its
                                energies and resources to serve its clientsand
                                all its partners.
                            </p>
                        </div>
                        <div>
                            <h3>Our message</h3>
                            <p>
                                Constantly striving to implement the necessary
                                initiatives to achieve the future vision and
                                raise the work efficiency of our partners.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-img">
                    <img
                        src="/about-logo.png"
                        alt="Vica Logo"
                        className="about-img-vica"
                    />
                    <img
                        src="/about-design.png"
                        alt="About design"
                        className="about-img-design"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
