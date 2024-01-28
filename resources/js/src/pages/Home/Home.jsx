import Hero from "../../components/hero/Hero";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Home</title>
                <meta name="description" content="Vica Home Page " />
            </Helmet>
            <Hero />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Home;
