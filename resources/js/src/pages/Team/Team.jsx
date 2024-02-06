import { Helmet } from "react-helmet";
// import TeamSection from "../../components/Home page/team-section/TeamSection";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Hero from "../../components/hero/Hero";
import TeamSection from "../../components/Home page/team-section/TeamSection";

window.scrollTo(0, 0);

const Team = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Our Team</title>
                <meta name="description" content="Vica Our Team Page " />
            </Helmet>
            <Hero />
            <TeamSection />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Team;
