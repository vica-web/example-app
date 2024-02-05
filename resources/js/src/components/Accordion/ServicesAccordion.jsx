import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./ServicesAccordion.css";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    "&::before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
    ({ theme }) => ({
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, .05)"
                : "rgba(0, 0, 0, .03)",
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1),
        },
    })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    borderTop: "1px solid transparent",
}));

export default function ServicesAccordion({ changeImgSrc }) {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <div
                className="acc1"
                onClick={() => {
                    changeImgSrc("panel1");
                }}
            >
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    className="acc1-content"
                >
                    <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography className="service-header">
                            Website development
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="service-text">
                            Unlock the full potential of your online presence
                            with our exceptional web development services. Our
                            team of skilled developers and designers is
                            dedicated to creating responsive, user-friendly, and
                            innovative websites tailored to your unique brand
                            identity. From concept to execution.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div
                className="acc2"
                onClick={() => {
                    changeImgSrc("panel2");
                }}
            >
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    className="acc2-content"
                >
                    <AccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography className="service-header">
                            Online Training
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="service-text">
                            Invest in the growth and proficiency of your team
                            with our comprehensive online training programs. We
                            go beyond traditional web development services by
                            offering specialized courses in the latest
                            technologies, coding languages, and industry best
                            practices.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div
                className="acc3"
                onClick={() => {
                    changeImgSrc("panel3");
                }}
            >
                <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    className="acc3-content"
                >
                    <AccordionSummary
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography className="service-header">
                            PR services
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="service-text">
                            Amplify your brand's voice and visibility with our
                            strategic Public Relations services. We understand
                            the power of effective communication in the digital
                            age. From media relations to social media campaigns,
                            we work collaboratively to build and maintain a
                            positive public image, ensuring your brand story
                            reaches the right audience.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
