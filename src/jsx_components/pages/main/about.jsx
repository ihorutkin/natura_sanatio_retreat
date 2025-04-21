import React from "react";

import "../../../styles/pages/main/about.css"

export default function About(){
    return(
        <section className="about" id="about">
            <div className="about_container">
                <h2>About</h2>
                <p className="about_subtitle">Natura Sanatio Retreat is more than just a place to unwind — it is a sanctuary for the soul, a haven where the noise of the outside world fades away, and where your journey toward inner peace and renewal truly begins.</p>
                <div className="about_block">
                    <article className="about_content">
                        <p data-aos="fade-right" data-aos-duration="1000">
                            The <span>NSR</span> program was created specifically for a comprehensive and swift
                            <span>restoration</span> of your resources. Our methods combine modern natural sciences with
                            ancient <span>knowledge</span> of the human body to provide practical and effective approaches 
                            for <span>recovery</span>, even from deep states of stress. We have assembled professionals in their
                            fields to offer you quality knowledge and skills that will support you not only
                            during your stay but also serve as valuable tools for ongoing  self-care, <span>holistic 
                            health</span>, and the <span>balance of body</span>, <span>mind</span> and <span>spirit</span>
                        </p>
                    </article>
                    {/* <article className="about_img_block">
                        <div className="about_img img1" data-aos="fade-left" data-aos-duration="800"></div>
                        <div className="about_img img2" data-aos="fade-left" data-aos-duration="1200"></div>
                        <div className="about_img img4" data-aos="fade-left" data-aos-duration="1000"></div>
                    </article>             */}
                </div>
            </div>
        </section>
    )
}