import React, { useEffect } from "react";
import Layout from "../layout/layout";

import Intro from "./main/intro";
import About from "./main/about";
import WhatWeOffer from "./main/what_we_offer";
import OnlineProgramPage from "./online_programs"
import OnSiteProgramPage from "./on_site_proram"
import AccomodationAndDietPage from "./accomodation_diet";
import NaturaSanatio from "./main/sri_lanka";
import ContactForm from "./contact";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/utils";

export default function MainPage(){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;

            // Скроллим к нужной секции
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);

            // Очищаем состояние чтобы избежать повторного скролла
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    return(
        <div style={{ overflow: "hidden"}}>
            <Layout>
                <Intro />
                {/* <NaturaSanatio /> */}
                <About />
                <WhatWeOffer />
                <AccomodationAndDietPage />
                {/* <OnlineProgramPage /> */}
                <OnSiteProgramPage />
                <ContactForm />
                <article className="online_plan_additionaly">
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo fitness"></div>
                        <p>Personal home fitness exercises programs</p>
                    </div>
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo medical"></div>
                        <p>Holistic Medications prescription</p>
                    </div>
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo test"></div>
                        <p>Psychological tests for type of personality</p>
                    </div>
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo mind_coaching"></div>
                        <p>Pre-post-program individual mind-coaching</p>
                    </div>
                </article>
            </Layout>
        </div>
    )
}