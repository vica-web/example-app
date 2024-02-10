import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import ContactSection from "../../components/Contact page/ContactSection";
import "./contact.css";
import StaticHero from "../../components/hero/static-hero/StaticHero";
import ContactBanner from "../../components/contact-banner/ContactBanner";

window.scrollTo(0, 0);

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Contact</title>
                <meta name="description" content="Vica Contact Page " />
            </Helmet>
            <Navbar />
            <div>
                <StaticHero
                    heroStyle="contact-slider"
                    title1="Contact with"
                    span1="Vica"
                    title2="We always "
                    span2="Online"
                    desc="We will be very happy to communicate with us through our various platforms."
                    heroImg="/contact-hero.png"
                />
            </div>
            <ContactBanner />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Contact;
