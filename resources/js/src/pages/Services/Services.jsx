import Hero from "../../components/hero/Hero";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Services</title>
                <meta name="description" content="Vica Services Page " />
            </Helmet>
            <Hero />
            <Services />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Services;
