import "./main-header.css";
const MainHeader = ({ firstTitle, secondTitle }) => {
    return (
        <div className="main-header">
            <h1>
                {firstTitle}
                <span>{secondTitle}</span>
            </h1>
        </div>
    );
};

export default MainHeader;
