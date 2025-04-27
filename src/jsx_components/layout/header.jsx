import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/utils";

import "../../styles/layout/header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleSectionClick = (sectionId) => {
        console.log(location.pathname)
        if (location.pathname !== "/") {
            // Переходим на главную страницу и передаём в state куда скроллить
            navigate("/", { state: { scrollTo: sectionId } });
        } else {
            // Если уже на главной — сразу скроллим
            scrollToSection(sectionId);
        }
        setMenuOpen(false);
    };

    return (
        <div className="header_container" id="header">
            <div className="nsr_logo" id="nsr_logo"></div>
            <div className="header_nav_lang">
                <ul className={`navigation_container ${menuOpen ? "active" : ""}`}>
                    <li className='menu_item'>
                        <Link to="/" className='header_link' onClick={() => setMenuOpen(false)}>home</Link>
                    </li>
                    <li className='menu_item'>
                        <a onClick={() => handleSectionClick('about')} className='header_link'>about</a>
                    </li>
                    <li className='menu_item'>
                        <a onClick={() => handleSectionClick('what_we_offer')} className='header_link'>what we offer</a>
                    </li>
                    <li className='menu_item'>
                        <a onClick={() => handleSectionClick('accomodation_and_diet')} className='header_link'>accommodation and diet</a>
                    </li>
                    <li className='menu_item'>
                        <a onClick={() => handleSectionClick('onsite_program')} className='header_link'>On-site</a>
                    </li>
                    <li className='menu_item'>
                        <Link to="/main_nsr_team" className='header_link'>main NSR team</Link>
                    </li>
                </ul>
                <div className="header_contact">
                    <div className="header_contact_block">
                        <div className="header_call"></div>
                        <Link onClick={() => handleSectionClick('contact')} className="header_contact_link">Contact</Link>
                    </div>
                </div>
                <div className={`menu_toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <div></div><div></div><div></div>
                </div>
            </div>
        </div>
    );
}
