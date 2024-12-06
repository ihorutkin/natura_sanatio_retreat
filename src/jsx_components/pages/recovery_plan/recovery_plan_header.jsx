import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/pages/recovery_plan/recovery_plan_header.css"

export default function RecoveryPlanHeader(){
    return (
        <nav className="recovery_plan_navigation">
            <Link 
                to={"/"}
                className="recovery_plan_link"
            >home</Link>
            <Link 
                to={"/recovery_plan"}
                className="recovery_plan_link"
            >recovery plan</Link>
            <Link 
                to={"/accomodation_and_diet"}
                className="recovery_plan_link"
            >accomodation and diet</Link>
            <Link 
                to={"/main_nsr_team"}
                className="recovery_plan_link"
            >main NSR team</Link>
        </nav>
    )
}