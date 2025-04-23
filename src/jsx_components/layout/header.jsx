import React, { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToSection, hide, getPageHash } from "../../utils/utils"

import "../../styles/layout/header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    console.log(getPageHash())

    return (
        <div className="header_container" id="header">
            <div className="nsr_logo" id="nsr_logo"></div>
            <div className="header_nav_lang">
                <ul className={`navigation_container ${menuOpen ? "active" : ""}`}>
                    <li className={ hide('#/') }>
                        <Link 
                            to={"/"} 
                            className='header_link'
                        >
                            home
                        </Link>
                    </li>
                    <li className={ hide('#/main_nsr_team') }>
                        <Link 
                            onClick={() => scrollToSection('about')} 
                            className='header_link'
                        >
                            about
                        </Link>
                    </li>
                    <li className={ hide('#/main_nsr_team') }>
                        <Link 
                            onClick={() => scrollToSection('what_we_offer')}
                            className='header_link'
                        >
                            what we offer
                        </Link>
                    </li>
                    <li className={ hide('#/main_nsr_team') }>
                        <Link 
                            onClick={() => scrollToSection('accomodation_and_diet')} 
                            className='header_link'
                        >
                            accommodation and diet
                        </Link>
                    </li>
                    <li className={ hide('#/main_nsr_team') }>
                        <Link 
                            onClick={() => scrollToSection('onsite_program')} 
                            className='header_link'
                        >
                            On-site
                        </Link>
                    </li>
                    <li className={ hide('#/main_nsr_team') }>
                        <Link 
                            to={"/main_nsr_team"} className='header_link'>main NSR team
                        </Link>
                    </li>
                </ul>
                <div className="header_contact">
                    <div className={getPageHash() === '#/main_nsr_team' ? 'hide' : "header_contact_block"}>
                        <div className="header_call"></div>
                        <Link onClick={() => scrollToSection('contact')} className="header_contact_link">Contact</Link>
                    </div>
                    {/* <div className="header_lang_block">
                        <div className="header_lang_switch"></div>
                        <div className="header_lang">EN</div>
                    </div> */}
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
