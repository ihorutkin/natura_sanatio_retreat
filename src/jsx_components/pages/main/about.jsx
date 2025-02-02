import React from "react";

import "../../../styles/pages/main/about.css"

export default function About(){
    return(
        <section className="about" id="about">
            <div className="about_container">
                <h2>Who we are</h2>
                <p className="about_subtitle">Natura Sanatio Retreat is more than just a place for relaxation</p>
                <div className="about_block">
                    <article className="about_content" data-aos="fade-right" data-aos-duration="1000">
                        <p>
                            <span className="about_nsr">NSR</span> it is a space where you can find renewal and harmony, reconnect with the power
                            of nature, and restore balance in your life. We offer more than just a
                            retreat - we create the conditions for a true transformation.
                        </p>
                    </article>
                    <article className="about_img_block">
                        <div className="about_img img1" data-aos="fade-left" data-aos-duration="800"></div>
                        <div className="about_img img2" data-aos="fade-left" data-aos-duration="1200"></div>
                        <div className="about_img img4" data-aos="fade-left" data-aos-duration="1000"></div>
                        {/* <div className="about_img img3" data-aos="fade-left" data-aos-duration="1200"></div> */}
                    </article>            
                </div>
            </div>
        </section>
    )
}