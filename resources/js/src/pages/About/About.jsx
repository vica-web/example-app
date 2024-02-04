import Hero from "../../components/hero/Hero";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import AboutSection from "../../components/Home page/About-Section/AboutSection";

const About = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | About</title>
                <meta name="description" content="Vica About Page " />
            </Helmet>
            <Hero />
            <AboutSection />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default About;
