import React from "react";

import "../../../styles/pages/on_site_program/individual_consultations.css"

export default function IndividualConsultation(){
    return (
        <article className="individual_consultation">
            <h2 className="block_title" data-aos="fade-up" data-aos-duration="600">Individual consultation with a Doctor</h2>
            <p data-aos="fade-up" data-aos-duration="1000">
                Our MD conducts an andividual diagnostic consultation
                for each participant to determine body type, Psychological
                state, personal needs, and requests, based on traditional
                Ayurvedic methods
            </p>
            <div className="individual_consultation_block">
                <ul className="individual_consultation_content">
                    <li data-aos="fade-right" data-aos-duration="600">Body type assessment (Dosha)</li>
                    <li data-aos="fade-right" data-aos-duration="800">Psychological state diagnosis</li>
                    <li data-aos="fade-right" data-aos-duration="1000">Therapy assignment for the duration of the stay</li>
                    <li data-aos="fade-right" data-aos-duration="1200">Prescriptionof natural medicinal remedies (if needed)</li>
                </ul>
                <div className="individual_consultation_img" data-aos="fade-left" data-aos-duration="1000"></div>
            </div>
        </article>
    )
}