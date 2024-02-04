import HeroBanner from "../hero-banner/HeroBanner";
import Navbar from "../navbar/Navbar";
import "./hero.css";
import HeroSlider from "./heroSlider/HeroSlider";

const Hero = () => {
    return (
        <>
            <div className="hero">
                <Navbar />
                <HeroSlider
                    title1="We Create"
                    span1="Solutions"
                    title2="for your web"
                    span2="Business"
                    desc="Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, praesentium."
                    heroImg="/temp.png"
                />
            </div>
            <HeroBanner />
        </>
    );
};

export default Hero;
