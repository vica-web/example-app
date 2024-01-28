import React from "react";
import ReactDom from "react-dom/client";
import "../../css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/signup" element={<Sign />} />
                <Route path="/login" element={<Log />} /> */}
            </Routes>
        </div>
    );
};

export default App;

const app = document.getElementById("main");
const root = ReactDom.createRoot(app);
root.render(
    <BrowserRouter basename={"/"}>
        <App />
    </BrowserRouter>
);
