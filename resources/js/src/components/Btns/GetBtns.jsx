import { Link } from "react-router-dom";
import "./GetBtns.css";
const GetBtn = () => {
    return (
        <Link to="/contact" className="get-btn">
            Get in touch
        </Link>
    );
};
export default GetBtn;
