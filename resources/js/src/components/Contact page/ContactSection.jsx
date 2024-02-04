import { Link } from "react-router-dom";
import { socialIcons } from "../footer/footer-data";
import "./contact-section.css";

const ContactSection = () => {
    return (
        <div className="contact-section container">
            <div className="contact-section-left">
                <h1>Contact information</h1>
                <div className="contact-section-left-desc">
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
                                        <img
                                            src={icon.imgSrcDark}
                                            alt={icon.title}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-section-right">
                <form action="">
                    <div>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="contactEmail"
                            id="contactEmail"
                            placeholder="E-Mail"
                        />
                        <input
                            type="text"
                            name="contactNum"
                            id="contactNum"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="contact-btn">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
