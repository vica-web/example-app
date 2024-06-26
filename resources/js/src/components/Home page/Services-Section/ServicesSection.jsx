import ServicesAccordion from "../../Accordion/ServicesAccordion";
import MainHeader from "../../General/main-header/MainHeader";
import "./services-section.css";
import { useState } from "react";

const ServicesSection = () => {
    //Image Src State
    const [imgRender, setImageRender] = useState("/services-web.webp");

    const changeImgSrc = (panel) => {
        if (panel == "panel1") {
            setImageRender("/services-web.webp");
        } else if (panel == "panel2") {
            setImageRender("/services-lap.webp");
        } else if (panel == "panel3") {
            setImageRender("/pr.webp");
        }
    };

    return (
        <>
            <div className="services-section container">
                <MainHeader firstTitle="Serv" secondTitle="ices" />
                <div className="services-content">
                    <div className="services-desc">
                        <ServicesAccordion changeImgSrc={changeImgSrc} />
                    </div>
                    <div className="services-img">
                        <div className="img-container">
                            <img
                                src={imgRender}
                                alt="Laptop"
                                className="about-img-vica"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesSection;
