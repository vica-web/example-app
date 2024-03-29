import "./NavbarStyles.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { links } from "../../data/navigation";

// Set state
// Make Handleclick Function

const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [isBoxShadow, setIsBoxShadow] = useState(true);
    function handelMenu() {
        setMobileMenuActive((prevState) => !prevState);
    }
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 80) {
            setIsBoxShadow(false);
        } else {
            setIsBoxShadow(true);
        }
    });
    const location = useLocation();

    return (
        <nav
            className="NavbarItems container"
            style={
                isBoxShadow
                    ? { boxShadow: "none" }
                    : { boxShadow: "1px 7px 14px 0 rgba(0, 0, 0, 0.25)" }
            }
        >
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
                {links.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link
                                to={item.path}
                                className={`nav-links ${
                                    location.pathname == item.path
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
                    <Link to="https://t.me/vica_trainings_bot">
                        <i className="fa-brands fa-telegram"></i>
                        Vica bot
                    </Link>
                </button>
            </ul>
            <button className="bot">
                <Link to="https://t.me/vica_trainings_bot">
                    <i className="fa-brands fa-telegram"></i>
                    Vica bot
                </Link>
            </button>
        </nav>
    );
};

export default Navbar;
