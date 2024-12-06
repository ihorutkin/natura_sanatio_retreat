import React from "react";

import "../../../styles/pages/main/what_we_offer.css"

export default function WhatWeOffer(){
    return(
        <section className="offers_container" id="what_we_offer">
            <div className="offers_block">
                <div className="offers_content">
                    <article className="offers_img"  data-aos="fade-right" data-aos-duration="1000"></article>
                    <article className="offers_text_block">
                        <div className="offers_title"  data-aos="fade-left" data-aos-duration="1000">
                            <h2>What we offer</h2>
                            <p><span>NSR</span> recognizes the <span>individual</span> and <span>holistic</span> nature of each person</p>
                        </div>
                        <div className="offers_text"  data-aos="fade-left" data-aos-duration="1200">
                            That's our program includes not only group activities but also personalized
                            consultations with experts who will help develop individualized plan tailoredto your physical,
                            emotionl, and mental state
                        </div>
                        <div className="offers_text"  data-aos="fade-left" data-aos-duration="1400">
                            We aim to create an environment where you can experience a true reset and build 
                            a foundation for lasting health and inner balance
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}