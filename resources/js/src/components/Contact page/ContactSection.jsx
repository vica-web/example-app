import { Link } from "react-router-dom";

import "./contact-section.css";
import { socialIcons } from "../../data/navigation";
import axios from "axios";
import { useState } from "react";

const ContactSection = () => {
    const [first, setfirst] = useState("");
    const [last, setlast] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");
    const send = () => {
        const data = {
            first: first,
            last: last,
            email: email,
            phone: phone,
            message: message,
        };
        axios.post("./api/send-mail", data).then((res) => {
            console.log(res.data);
            document.querySelector("#contactEmail").value = "";
            document.querySelector("#first").value = "";
            document.querySelector("#last").value = "";
            document.querySelector("#contactNum").value = "";
            document.querySelector("#message").value = "";
        });
    };

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
                        <p>info@vica.website</p>
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
                <div className="form">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={(event) => setfirst(event.target.value)}
                            id="first"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={(event) => setlast(event.target.value)}
                            id="last"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="contactEmail"
                            id="contactEmail"
                            placeholder="E-Mail"
                            onChange={(event) => setemail(event.target.value)}
                        />
                        <input
                            type="tel"
                            name="contactNum"
                            id="contactNum"
                            placeholder="Phone Number"
                            onChange={(event) => setphone(event.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            onChange={(event) => setmessage(event.target.value)}
                        ></textarea>
                    </div>
                    <div className="contact-btn">
                        <button type="submit" onClick={send}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
