import Hero from "../../components/hero/Hero";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import HeroSlider from "../../components/hero/heroSlider/HeroSlider";
import Navbar from "../../components/navbar/Navbar";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import ContactSection from "../../components/Contact page/ContactSection";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Contact</title>
                <meta name="description" content="Vica Contact Page " />
            </Helmet>
            <div className="hero">
                <Navbar />
                <HeroSlider
                    title1="Contact with"
                    span1="Vica"
                    desc="Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, praesentium."
                    heroImg="/contact-hero.png"
                />
            </div>
            <HeroBanner />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Contact;
