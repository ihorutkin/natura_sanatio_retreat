import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/layout/header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="header_container">
            <div className="nsr_logo"></div>
            <div className="header_nav_lang">
                <nav className={`navigation_container ${menuOpen ? "active" : ""}`}>
                    <Link to={"/"} className="header_link">home</Link>
                    <Link to={"/recovery_plan"} className="header_link">recovery plan</Link>
                    <Link to={"/accomodation_and_diet"} className="header_link">accommodation and diet</Link>
                    <Link to={"/main_nsr_team"} className="header_link">main NSR team</Link>
                </nav>
                <div className="header_contact">
                    <div className="header_contact_block">
                        <div className="header_call"></div>
                        <Link to={"#footer"} className="header_contact_link">Contact</Link>
                    </div>
                    <div className="header_lang_block">
                        <div className="header_lang_switch"></div>
                        <div className="header_lang">EN</div>
                    </div>
                </div>
                <div className={`menu_toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
