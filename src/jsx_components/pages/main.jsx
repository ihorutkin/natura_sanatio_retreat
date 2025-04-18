import React from "react";
import Layout from "../layout/layout";

import Intro from "./main/intro";
import About from "./main/about";
import WhatWeOffer from "./main/what_we_offer";
import OnlineProgramPage from "./online_programs"
import OnSiteProgramPage from "./on_site_proram"
import AccomodationAndDietPage from "./accomodation_diet";
import NaturaSanatio from "./main/sri_lanka";
import ContactForm from "./contact";

export default function MainPage(){
    return(
        <div style={{ overflow: "hidden"}}>
            <Layout>
                <Intro />
                {/* <NaturaSanatio /> */}
                <About />
                <WhatWeOffer />
                <AccomodationAndDietPage />
                <OnlineProgramPage />
                <OnSiteProgramPage />
                <ContactForm />
            </Layout>
        </div>
    )
}