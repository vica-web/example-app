import HeroBanner from "../hero-banner/HeroBanner";
import Navbar from "../navbar/Navbar";
import "./hero.css";
import HeroSlider from "./heroSlider/HeroSlider";

const Hero = () => {
    return (
        <>
            <Navbar />
            <div>
                <HeroSlider
                    heroStyle="hero-slider"
                    title1="We Create"
                    span1="Solutions"
                    title2="for your web"
                    span2="Business"
                    desc="Welcome to Vica Web Solutions, a startup passionate about crafting innovative and visually stunning web solutions."
                    heroImg="/temp.png"
                />
            </div>
            <HeroBanner />
        </>
    );
};

export default Hero;
