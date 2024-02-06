import { Link } from "react-router-dom";

import "./contact-section.css";
import { socialIcons } from "../../data/navigation";

const ContactSection = () => {
    return (
        <div className="contact-section container">
            <div className="contact-section-left">
                <h1>
                    Contact <span>information</span>
                </h1>
                <div className="contact-section-left-desc">
                    <div className="contact-section-email">
                        <h3>
                            Email <span>Address</span>
                        </h3>
                        <p>vicaweb.com@gmail.com</p>
                    </div>
                    <div className="contact-section-icons">
                        <h3>
                            Social <span>media</span>
                        </h3>
                        <div>
                            {socialIcons.map((icon) => {
                                return (
                                    <Link
                                        key={icon.title}
                                        to={icon.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
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
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="contactEmail"
                            id="contactEmail"
                            placeholder="E-Mail"
                            required
                        />
                        <input
                            type="tel"
                            name="contactNum"
                            id="contactNum"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            required
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
