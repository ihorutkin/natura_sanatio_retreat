import React from "react";
import massage from "../../../media/img/recovery_plan/on_site/massage.jpg"
import shirodhara from "../../../media/img/recovery_plan/on_site/Shirodhara.jpg"
import acupuncture from "../../../media/img/recovery_plan/on_site/acupuncture.jpg"

import "../../../styles/pages/on_site_program/ayurvedic_treatments.css"

export default function AyurvedicTreatments(){
    return (
        <article className="ayurvedic_treatments">
            <h2 className="block_title" data-aos="fade-up" data-aos-duration="600">Ayurvedic treatments</h2>
            <p data-aos="fade-up" data-aos-duration="1000">
                Our MD conducts an andividual diagnostic consultation
                for each participant to determine body type, Psychological
                state, personal needs, and requests, based on traditional
                Ayurvedic methods
            </p>
            <div className="ayurvedic_treatments_block">
                <div className="ayurcedic_img" data-aos="fade-up" data-aos-duration="600">
                    <img src={massage} alt=""></img>
                    <div className="ayurvedic_treatment_img_content">
                        <p>Massage treatment</p>
                    </div>
                </div>
                <div className="ayurcedic_img second_ayurcedic_img" data-aos="fade-up" data-aos-duration="800">
                    <img src={shirodhara} alt=""></img>
                    <div className="ayurvedic_treatment_img_content">
                        <p>Shirodhara</p>
                    </div>
                </div>
                <div className="ayurcedic_img" data-aos="fade-up" data-aos-duration="1000">
                    <img src={acupuncture} alt=""></img>
                    <div className="ayurvedic_treatment_img_content">
                        <p>Acupuncture</p>
                    </div>
                </div>
            </div>
        </article>
    )
}