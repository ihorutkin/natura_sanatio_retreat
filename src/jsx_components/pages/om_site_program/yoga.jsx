import React from "react";

import "../../../styles/pages/on_site_program/yoga.css"
import AOS from "aos"

export default function Yoga(){
    return (
        <article className="yoga">
            <h2 className="block_title" data-aos="fade-up" data-aos-duration="600">Yoga</h2>
            <p data-aos="fade-up" data-aos-duration="1000">Yoga is one of the oldest methods for mind-over-body
            control and a natural way to strengthen the musculoskeletal 
            system, improve physical flexibility, stimulate inner energy, 
            and enhance overall well-being</p>
            <div className="yoga_images">
                    <div className="yoga_img1" data-aos="fade-down-right" data-aos-duration="600"></div>
                    <div className="yoga_img2" data-aos="fade-down-left" data-aos-duration="600"></div>
                    <div className="yoga_img3" data-aos="fade-up-right" data-aos-duration="600"></div>
                    <div className="yoga_img4" data-aos="fade-up-left" data-aos-duration="600"></div>
            </div>
        </article>
    )
}