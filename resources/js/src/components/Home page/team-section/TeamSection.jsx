import MainHeader from "../../General/main-header/MainHeader";
import TeamSlider from "./TeamSlider";
import "./team-section.css";
const TeamSection = () => {
    return (
        <div className="team-section container">
            <MainHeader title="our team" />
            <TeamSlider />
        </div>
    );
};

export default TeamSection;
