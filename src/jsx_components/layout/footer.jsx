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
                    <p>tel: <a href="tel:777-777-777">+48 777 777 777</a></p>
                    <p>tel: <a href="tel:888-888-888">+48 888 888 888</a></p>
                    <p>email: <a href="mailto: example@gmail.com">example@gmail.com</a></p>
                    <p>email: <a href="mailto: example@gmail.com">example@gmail.com</a></p>
                </article>
            </div>
            <div className="white_line"></div>
            <div className="social_media">
                <Link to={"/#"} className="social_media_link instagram"></Link>
                <Link to={"/#"} className="social_media_link telegram"></Link>
                <Link to={"/#"} className="social_media_link facebook"></Link>
            </div>
        </footer>
    )
}