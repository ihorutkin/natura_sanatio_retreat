import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/layout/header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="header_container" id="header">
            <div className="nsr_logo" id="nsr_logo"></div>
            <div className="header_nav_lang">
                <ul className={`navigation_container ${menuOpen ? "active" : ""}`}>
                    <li className="menu_item">
                        <Link to={"/"} className="header_link">home</Link>
                    </li>
                    <li className="menu_item">
                        <Link to={"/recovery_plan"} className="header_link">recovery plan</Link>
                        <ul className="submenu">
                            <li className="submenu_item">
                                <Link to={"/online_program"} className="header_link submenu_link">Online</Link>
                            </li>
                            <li className="submenu_item">
                                <Link to={"/on-site_program"} className="header_link submenu_link">On-site</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu_item">
                        <Link to={"/accomodation_and_diet"} className="header_link">accommodation and diet</Link>
                    </li>
                    <li className="menu_item">
                        <Link to={"/main_nsr_team"} className="header_link">main NSR team</Link>
                    </li>
                </ul>
                <div className="header_contact">
                    <div className="header_contact_block">
                        <div className="header_call"></div>
                        <Link to={"#footer"} className="header_contact_link" onClick={() => scrollToSection('footer')}>Contact</Link>
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
