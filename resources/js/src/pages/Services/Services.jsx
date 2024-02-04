import Hero from "../../components/hero/Hero";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import ServicesSection from "../../components/Home page/Services-Section/ServicesSection";

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Services</title>
                <meta name="description" content="Vica Services Page " />
            </Helmet>
            <Hero />
            <ServicesSection />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Services;
