import React from "react";
import ReactDom from "react-dom/client";
import Navbar from "./components/Navbar";
const Main = () => {
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default Main;

const container = document.getElementById("main");
const root = ReactDom.createRoot(container);
root.render(<Main />);
