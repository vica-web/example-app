import Hero from "../../components/hero/Hero";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import AboutSection from "../../components/Home page/About-Section/AboutSection";
import ServicesSection from "../../components/Home page/Services-Section/ServicesSection";
import TeamSection from "../../components/Home page/team-section/TeamSection";

window.scrollTo(0, 0);

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions</title>
                <meta name="description" content="Vica Home Page " />
            </Helmet>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <TeamSection />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Home;
