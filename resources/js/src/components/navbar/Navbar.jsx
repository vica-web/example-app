import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Set state
// Make Handleclick Function
const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    function handelMenu() {
        setMobileMenuActive((prevState) => !prevState);
    }
    const location = useLocation();
    console.log(location.pathname);
    return (
        <nav className="NavbarItems container">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/footerLogo.svg" alt="Vica Logo" />
                </Link>
            </div>
            <div className="menu-icons">
                <i
                    className={
                        mobileMenuActive ? "fas fa-times" : "fas fa-bars"
                    }
                    onClick={handelMenu}
                ></i>
                {/* <i className="fas fa-times"></i> */}
            </div>
            <ul
                className={
                    mobileMenuActive ? "navbar-menu active" : "navbar-menu"
                }
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link
                                to={item.url}
                                className={`nav-links ${
                                    location.pathname == item.url
                                        ? "active"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
                <button className="bot-mobile">
                    <Link
                        to="https://t.me/vica_trainings_bot"
                        className="btn-sign"
                    >
                        <i className="fa-brands fa-telegram"></i>
                        Vica bot
                    </Link>
                </button>
            </ul>
            <button className="bot">
                <Link to="https://t.me/vica_trainings_bot" className="btn-sign">
                    <i className="fa-brands fa-telegram"></i>
                    Vica bot
                </Link>
            </button>
        </nav>
    );
};

export default Navbar;
