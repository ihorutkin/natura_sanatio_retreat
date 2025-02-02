import React from "react";

import "../../../styles/pages/main/what_we_offer.css"

export default function WhatWeOffer(){
    return(
        <section className="offers_container" id="what_we_offer">
            <div className="offers_block">
                <div className="offers_content">
                    <article className="offers_text_block">
                        <div className="offers_title" data-aos="fade-left" data-aos-duration="1000">
                            <h2>What we offer</h2>
                            <p>Get your first step for new life with us!</p>
                        </div>
                        <ul className="offers_list">
                            <li className="offer_item" data-aos="fade-left" data-aos-duration="800">Individual approach to everyone</li>
                            <li className="offer_item" data-aos="fade-left" data-aos-duration="800">Comprehensive analyses of mental and physical conditions by experts </li>
                            <li className="offer_item" data-aos="fade-left" data-aos-duration="800">Group mind and body therapies </li>
                            <li className="offer_item" data-aos="fade-left" data-aos-duration="800">Individual mind and body therapies </li>
                            <li className="offer_item" data-aos="fade-left" data-aos-duration="800">Educational programs for mind resetting</li>
                            <li className="offer_item" data-aos="fade-left" data-aos-duration="800">Diet tailored to body type </li>
                            <li className="offer_item" data-aos="fade-left" data-aos-duration="800">Comfortable and peaceful accommodation </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}