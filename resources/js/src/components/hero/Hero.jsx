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
                    title1_1="We Create"
                    span1_1="Solutions"
                    title1_2="for your web"
                    span1_2="Business"
                    title2_1="Our Technical"
                    span2_1="Trainings"
                    title2_2="will make your"
                    span2_2="Future"
                    desc="Welcome to Vica Web Solutions, a startup passionate about crafting innovative and visually stunning web solutions."
                    desc2="Vica Web Solutions offers professional trainings in various web specialties to qualify high-level software teams."
                    heroImg="/hero.webp"
                    heroImg2="/hero2.webp"
                />
            </div>
            <HeroBanner />
        </>
    );
};

export default Hero;
