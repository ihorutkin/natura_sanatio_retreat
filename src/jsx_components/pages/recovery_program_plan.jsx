import React from "react";
import RecoveryPlanHeader from "./recovery_plan/recovery_plan_header";
import { Link } from "react-router-dom";

import "../../styles/pages/recovery_program_plan.css"

export default function RecoveryProgramPlanPage(){
    return(
        <section className="recovery_program_plan_container">
            <RecoveryPlanHeader />
            <Link to="/online_program" className="online_plan_block">
                <div className="online_plan_content">
                    {/* <div className="online_logo"></div> */}
                    <p className="recovery_title">Online plan</p>
                    <p>
                        Focused on pre-rehabilitation preparation for participants. 
                        Based on online consultations, lessons and tests with spacialists 
                        in selected areas. Aimed at the initial identification of 
                        participants needs, issues, and requests, as well as enhancing 
                        self-awareness
                    </p>
                </div>
            </Link>
            <Link to="/on-site_program" className="on_site_plan_block">
                <div className="on_site_plan_content">
                    {/* <div className="online_logo"></div> */}
                    <p className="recovery_title">On-site plan</p>
                    <p>
                        The main renewal program: individual work with therapists, 
                        group sessions, and self-reconstruction in a supportive environment.
                    </p>
                </div>
            </Link>
        </section>
    )
}