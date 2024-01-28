import Hero from "../../components/hero/Hero";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Contact</title>
                <meta name="description" content="Vica Contact Page " />
            </Helmet>
            <Hero />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Contact;
