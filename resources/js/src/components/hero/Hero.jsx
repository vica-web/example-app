import HeroBanner from "../hero-banner/HeroBanner";
import Navbar from "../navbar/Navbar";
import Temp from "../temp/Temp";
import "./hero.css";
import HeroSlider from "./heroSlider/HeroSlider";

const Hero = () => {
    return (
        <>
            <div className="hero">
                <Navbar />
                {/* <Temp /> */}
                <HeroSlider />
            </div>
            <HeroBanner />
        </>
    );
};

export default Hero;
