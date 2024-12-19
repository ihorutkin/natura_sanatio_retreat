import React from "react";

import introVideo from "../../../media/video/13234027-uhd_3840_2160_30fps.mp4"

import "../../../styles/pages/main/intro.css"
import { Link } from "react-router-dom";
import SeeMoreBtn from "../../buttons/seeMore";

export default function Intro(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <section className="intro_container">
            <article className="intro_video">
                <video src={introVideo} loop autoPlay muted></video>
            </article>
            <article className="intro_content_block">
                <div className="intro_content">
                    <h2>NATURA SANATIO RTREAT</h2>
                    <p>A journey to reneval</p>
                    <SeeMoreBtn>
                        <Link to="#about" className="see_more_btn" onClick={() => scrollToSection('about')}>SEE MORE</Link>
                    </SeeMoreBtn>
                </div>
            </article>
        </section>
    )
}