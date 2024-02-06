import "./main-header.css";
const MainHeader = ({ firstTitle, secondTitle }) => {
    return (
        <div className="main-header">
            <h1>
                <span className="main-header-first">{firstTitle}</span>
                <span className="main-header-last">{secondTitle}</span>
            </h1>
        </div>
    );
};

export default MainHeader;
