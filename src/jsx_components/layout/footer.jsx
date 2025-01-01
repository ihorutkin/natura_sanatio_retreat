import React from "react";
import { Link } from "react-router-dom";

import "../../styles/layout/footer.css"

export default function Footer(){
    return (
        <footer className="footer_container" id="footer">
            <div className="footer_content">
                <article className="footer_title">
                    <h2>NaturaSanatio</h2>
                    <h2>RETREAT</h2>
                </article>
                <nav className="footer_navigation">
                    <h2>LINKS</h2>
                    <Link 
                        to={"/"} 
                        className="footer_link"
                    >home</Link>
                    <Link 
                        to={"/recovery_plan"} 
                        className="footer_link"
                    >recovery plan</Link>
                    <Link 
                        to={"/accomodation_and_diet"} 
                        className="footer_link"
                    >accomodation and diet</Link>
                    <Link 
                        to={"/main_nsr_team"} 
                        className="footer_link"
                    >main NSR team</Link>
                </nav>
                <article className="footer_contacts">
                    <h2>CONTACT INFORMATION</h2>
                    <p>tel: <a href="tel:+94779790617">+94779790617</a></p>
                    <p>email: <a href="mailto: naturasanationsr@gmail.com">naturasanationsr@gmail.com</a></p>
                </article>
            </div>
            <div className="white_line"></div>
            <div className="social_media">
                <Link to={"https://www.instagram.com/nsr.glob/"} className="social_media_link instagram"></Link>
                <Link to={"https://t.me/nsrglob"} className="social_media_link telegram"></Link>
            </div>
        </footer>
    )
}