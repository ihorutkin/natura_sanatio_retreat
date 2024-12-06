import React from "react";

import introVideo from "../../../media/video/13234027-uhd_3840_2160_30fps.mp4"

import "../../../styles/pages/main/intro.css"

export default function Intro(){
    return(
        <section className="intro_container">
            <article className="intro_video">
                <video src={introVideo} loop autoPlay muted></video>
            </article>
            <article className="intro_content_block">
                <div className="intro_content">
                    <h2>NATURA SANATIO RTREAT</h2>
                    <p>A journey to reneval</p>
                    <div className="see_more_block">
                        <button className="see_more_btn">See more</button>
                    </div>
                </div>
            </article>
        </section>
    )
}