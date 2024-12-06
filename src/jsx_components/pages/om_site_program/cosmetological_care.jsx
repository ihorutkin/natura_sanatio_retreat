import React from "react";

import "../../../styles/pages/on_site_program/cosmetological_care.css"

export default function CosmetologicalCare(){
    return (
        <article className="cosmetological_care">
            <h2 className="block_title" data-aos="fade-up" data-aos-duration="600">Cosmetological Care</h2>
            <p data-aos="fade-up" data-aos-duration="1000">Beyond a healthy body and mind, there remains another essential
            component of our well-being-beauty. At NSR, we use only natural cosmetics, 
            free of synthetic components, allowing your skin to be nourished, 
            rejuvenated, and restored in harmony with your body and spirit</p>
            <div className="cosmetological_service">
                <div className="service_item" data-aos="fade-right" data-aos-duration="600">Diagnostics and recommendations</div>
                <div className="service_item" data-aos="fade-right" data-aos-duration="600">Natural cosmetics by skin type</div>
                <div className="service_item" data-aos="fade-right" data-aos-duration="600">Ultrasound</div>
                <div className="service_item" data-aos="fade-right" data-aos-duration="600">LED therapy</div>
                <div className="service_item" data-aos="fade-right" data-aos-duration="600">Face SPA</div>
                <div className="service_item" data-aos="fade-right" data-aos-duration="600">Massages</div>
            </div>
        </article>
    )
}