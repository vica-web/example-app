import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import TeamSection from "../../components/Home page/team-section/TeamSection";
import StaticHero from "../../components/hero/static-hero/StaticHero";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import Navbar from "../../components/navbar/Navbar";

window.scrollTo(0, 0);

const Team = () => {
    return (
        <>
            <Helmet>
                <title>Vica web Solutions | Our Team</title>
                <meta name="description" content="Vica Our Team Page " />
            </Helmet>
            <Navbar />
            <div>
                <StaticHero
                    heroStyle="st-hero"
                    title1="We Work with"
                    span1="Passion"
                    title2="And Train With"
                    span2="All Love"
                    desc="Our team is characterized by its diversity and great experience in development and training."
                    heroImg="/hero2.png"
                />
            </div>
            <HeroBanner />
            <TeamSection />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Team;
