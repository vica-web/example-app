import { Link } from "react-router-dom";
import { socialIcons } from "../footer/footer-data";

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="contact-section-right">
                <h1>Contact information</h1>
                <div className="contact-section-email">
                    <h3>Email Address</h3>
                    <p>vicaweb.com@gmail.com</p>
                </div>
                <div className="contact-section-icons">
                    <h3>Social media</h3>
                    <div>
                        {socialIcons.map((icon) => {
                            return (
                                <Link key={icon.title} to={icon.href}>
                                    <img src={icon.imgSrc} alt={icon.title} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="contact-section-left"></div>
        </div>
    );
};

export default ContactSection;
