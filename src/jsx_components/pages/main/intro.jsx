import React from "react";

import introVideo from "../../../media/video/13234027-uhd_3840_2160_30fps.mp4"

import "../../../styles/pages/main/intro.css"
import { Link } from "react-router-dom";
import SeeMoreBtn from "../../buttons/seeMore";
import { scrollToSection } from "../../../utils/utils"


export default function Intro(){

    return(
        <section className="intro_container">
            <article className="intro_video">
                <video src={introVideo} loop autoPlay muted playsInline></video>
            </article>
            <article className="intro_content_block">
                <div className="intro_content">
                    <h2>NaturaSanatio</h2>
                    <h2 className="retreat">RETREAT</h2>
                    <p>A journey to reneval</p>
                    <Link 
                            className="see_more_btn"
                            to="#about"
                            onClick={() => scrollToSection('about')}
                    >
                        <SeeMoreBtn>
                            SEE MORE
                        </SeeMoreBtn>
                    </Link>
                </div>
            </article>
        </section>
    )
}