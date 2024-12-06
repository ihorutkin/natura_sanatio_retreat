import React from "react";
import Layout from "../layout/layout";

import "../../styles/pages/main_nsr_team.css"

export default function MainNSRTeamPage(){
    return(
        <Layout>
             <section className="main_nsr_team_container">
                <article className="main_nsr_team">
                    <div className="teammate maryana">
                        <div className="name">Maryana Hudyma</div>
                    </div>
                    <div className="teammate valentyna">
                        <div className="name">Valentyna Smiy</div>
                    </div>
                    <div className="teammate prasad">
                        <div className="name">Dr. Prasad Muthunayake</div>
                    </div>
                    <div className="teammate artemyi">
                        <div className="name">Artemyi Frolov</div>
                    </div>
                </article>
            </section>
        </Layout>
    )
}