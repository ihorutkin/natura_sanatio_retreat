import React from "react";
import Layout from "../layout/layout";

import "../../styles/pages/online_program.css"

export default function OnlineProgramPage(){
    return(
        <Layout>
            <section className="online_container">
                <h2 data-aos="fade-up" data-aos-duration="600">ONLINE PROGRAM</h2>
                <p data-aos="fade-up" data-aos-duration="1000">Complex of personalized analizes by</p>
                <article className="online_plan">
                    <div className="online_plan_item"data-aos="fade-right" data-aos-duration="600">Psychologist</div>
                    <div className="online_plan_item"data-aos="fade-right" data-aos-duration="1000">Nutritionist</div>
                    <div className="online_plan_item"data-aos="fade-left" data-aos-duration="600">Cosmetologist</div>
                    <div className="online_plan_item"data-aos="fade-left" data-aos-duration="1000">Numerology</div>
                </article>
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
            </section>
        </Layout>
    )
}