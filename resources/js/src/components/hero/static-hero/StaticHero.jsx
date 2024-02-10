import "./static-hero.css";

const StaticHero = ({
    title1,
    span1,
    title2,
    span2,
    desc,
    heroImg,
    heroStyle,
}) => {
    return (
        <header className="container">
            <div className={heroStyle}>
                <div className="st-hero-content">
                    <h1>
                        {title1}
                        <span> {span1}</span>
                        <br />
                        {title2}
                        <span> {span2}</span>
                    </h1>
                    <p>{desc}</p>
                </div>
                <div className="st-hero-right">
                    <div className="st-hero-img">
                        <img src={heroImg} alt="" className="st-hero-person" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default StaticHero;
