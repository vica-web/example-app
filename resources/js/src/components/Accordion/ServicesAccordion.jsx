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
                >
                    <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography
                            style={{ fontSize: "2rem", marginBottom: "16px" }}
                        >
                            Website development
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            style={{
                                fontSize: "1.25rem",
                                textAlign: "justify",
                            }}
                        >
                            Take your career to the next level with our
                            specialized training courses, we can unlock you
                            potentials and enhance your skills to make sure that
                            you are all set to kick-start your career with our
                            comprehensive training program.
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
                >
                    <AccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography
                            style={{ fontSize: "2rem", marginBottom: "16px" }}
                        >
                            Online Training
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            style={{
                                fontSize: "1.25rem",
                                textAlign: "justify",
                            }}
                        >
                            Take your career to the next level with our
                            specialized training courses, we can unlock you
                            potentials and enhance your skills to make sure that
                            you are all set to kick-start your career with our
                            comprehensive training program.
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
                >
                    <AccordionSummary
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography
                            style={{ fontSize: "2rem", marginBottom: "16px" }}
                        >
                            PR services
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            style={{
                                fontSize: "1.25rem",
                                textAlign: "justify",
                            }}
                        >
                            Take your career to the next level with our
                            specialized training courses, we can unlock you
                            potentials and enhance your skills to make sure that
                            you are all set to kick-start your career with our
                            comprehensive training program.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}