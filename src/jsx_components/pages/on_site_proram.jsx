import React from "react";
import Layout from "../layout/layout";
import IndividualConsultation from "./om_site_program/individual_consultation";
import AyurvedicTreatments from "./om_site_program/ayurvedic_treatments";
import Meditation from "./om_site_program/meditation";
import Yoga from "./om_site_program/yoga";
import CosmetologicalCare from "./om_site_program/cosmetological_care";
import GroupTherapy from "./om_site_program/group_therapy";

import "../../styles/pages/on_site_program.css"

export default function OnSiteProgramPage(){
    return(
        // <Layout>
            <section className="on_site_container" id="onsite_program">
                <h2>ON-SITE PROGRAM</h2>
                <IndividualConsultation />
                <AyurvedicTreatments />
                <Meditation />
                <Yoga />
                <CosmetologicalCare />
                {/* <GroupTherapy /> */}
            </section>
        // </Layout>
    )
}