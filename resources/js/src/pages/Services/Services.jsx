import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import ServicesSection from "../../components/Home page/Services-Section/ServicesSection";
import StaticHero from "../../components/hero/static-hero/StaticHero";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import Navbar from "../../components/navbar/Navbar";

window.scrollTo(0, 0);

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Services</title>
                <meta name="description" content="Vica Services Page " />
            </Helmet>
            <Navbar />
            <div>
                <StaticHero
                    heroStyle="st-hero"
                    title1="We Help You "
                    span1="To Start"
                    title2="& Open Future"
                    span2="Horizon"
                    desc="Vica Web Solutions offers professional trainings in various web specialties to qualify high-level software teams."
                    heroImg="/hero2.webp"
                />
            </div>
            <HeroBanner />
            <ServicesSection />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Services;
