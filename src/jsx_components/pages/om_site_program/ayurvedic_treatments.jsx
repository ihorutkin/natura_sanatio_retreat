import React from "react";
import massage from "../../../media/img/recovery_plan/on_site/massage.jpg"
import shirodhara from "../../../media/img/recovery_plan/on_site/Shirodhara1.jpg"
import acupuncture from "../../../media/img/recovery_plan/on_site/acupuncture.jpg"

import "../../../styles/pages/on_site_program/ayurvedic_treatments.css"

export default function AyurvedicTreatments(){
    return (
        <article className="ayurvedic_treatments">
            <h2 className="block_title" data-aos="fade-up" data-aos-duration="600">Ayurvedic treatments</h2>
            <div className="ayurvedic_treatments_block">
                <div className="ayurcedic_img" data-aos="fade-up" data-aos-duration="600">
                    <img src={massage} alt=""></img>
                    <div className="ayurvedic_treatment_img_content">
                        <h2>Massage treatment</h2>
                        <p>
                            An ancient massage technique that has been used for millennia 
                            in Asian countries to restore the body, mind, and spirit.
                        </p>
                    </div>
                </div>
                <div className="ayurcedic_img second_ayurcedic_img" data-aos="fade-up" data-aos-duration="1000">
                    <img src={shirodhara} alt=""></img>
                    <div className="ayurvedic_treatment_img_content">
                        <h2>Shirodhara</h2>
                        <p>
                            Old traditional forehead therapy to calm the mind, balance 
                            the nervous system and promote a deep relaxation
                        </p>
                    </div>
                </div>
                <div className="ayurcedic_img" data-aos="fade-up" data-aos-duration="1400">
                    <img src={acupuncture} alt=""></img>
                    <div className="ayurvedic_treatment_img_content">
                        <h2>Acupuncture</h2>
                        <p>
                            Through 2000 years to now is used to reduce pain, improve 
                            energy flow, relive stress, and support overall psychical 
                            and emotional balance.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}