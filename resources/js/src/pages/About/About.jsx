import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import AboutSection from "../../components/Home page/About-Section/AboutSection";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import StaticHero from "../../components/hero/static-hero/StaticHero";
import Navbar from "../../components/navbar/Navbar";

window.scrollTo(0, 0);

const About = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | About</title>
                <meta name="description" content="Vica About Page " />
            </Helmet>
            <Navbar />
            <div>
                <StaticHero
                    heroStyle="st-hero"
                    title1="Vica Web"
                    span1="Solutions"
                    title2="A Software"
                    span2="Company"
                    desc="Welcome to Vica Web Solutions, a startup passionate about crafting innovative and visually stunning web solutions."
                    heroImg="/hero.png"
                />
            </div>
            <HeroBanner />
            <AboutSection />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default About;
