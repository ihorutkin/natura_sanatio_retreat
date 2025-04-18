import React from "react";

import "../../../styles/pages/main/about.css"

export default function About(){
    return(
        <section className="about" id="about">
            <div className="about_container">
                <h2>Who we are</h2>
                <p className="about_subtitle">Natura Sanatio Retreat is more than just a place to unwind — it is a sanctuary for the soul, a haven where the noise of the outside world fades away, and where your journey toward inner peace and renewal truly begins.</p>
                <div className="about_block">
                    <article className="about_content">
                        <p data-aos="fade-right" data-aos-duration="1000">
                            At NSR, we believe in the deep, healing power of nature. 
                            Our retreat is designed to help you reconnect with the 
                            natural world and with yourself. Nestled in a serene and 
                            nurturing environment, this is a space where you can breathe 
                            deeply, let go of stress, and feel fully present in the moment. 
                            Here, amidst the beauty of the earth, transformation isn’t 
                            just possible — it’s inevitable.
                        </p>
                        <p data-aos="fade-left" data-aos-duration="1000">
                            We don’t just offer a retreat; we offer a holistic experience 
                            carefully crafted to support your physical, emotional, and 
                            spiritual well-being. Whether you seek clarity, rest, or a 
                            new perspective, NSR provides the ideal conditions to realign 
                            your body and mind. Through immersive experiences, mindful 
                            practices, and intentional design, we create a space where 
                            balance can be restored and harmony can flourish.
                            Let Natura Sanatio Retreat be the beginning of a new chapter 
                            — one where you return to your essence, rediscover your strength, 
                            and step into a more vibrant and fulfilled version of yourself.
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