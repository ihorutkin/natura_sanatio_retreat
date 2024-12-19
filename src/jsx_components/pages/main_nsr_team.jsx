import React from "react";
import Layout from "../layout/layout";
import SeeMoreBtn from "../buttons/seeMore"

import "../../styles/pages/main_nsr_team.css"
import { Link } from "react-router-dom";

export default function MainNSRTeamPage(){
    return(
        <Layout>
             <section className="main_nsr_team_container">
                <article className="main_nsr_team">
                    <div className="teammate maryana">
                        <div className="name">
                            Maryana Hudyma
                            <SeeMoreBtn>
                                <Link className="nsr_teammates" to={"/main_nsr_team/maryana"}>See more</Link>
                            </SeeMoreBtn>
                        </div>
                    </div>
                    <div className="teammate valentyna">
                        <div className="name">
                            Valentyna Smiy
                            <SeeMoreBtn>
                                <Link className="nsr_teammates" to={"/main_nsr_team/valentyna"}>See more</Link>
                            </SeeMoreBtn>
                        </div>
                    </div>
                    <div className="teammate prasad">
                        <div className="name">
                            Dr. Prasad Muthunayake
                            <SeeMoreBtn>
                                <Link className="nsr_teammates" to={"/main_nsr_team/prasad"}>See more</Link>
                            </SeeMoreBtn>
                        </div>
                    </div>
                    <div className="teammate artemyi">
                        <div className="name">
                            Artemyi Frolov
                            <SeeMoreBtn>
                                <Link className="nsr_teammates" to={"/main_nsr_team/artemyi"}>See more</Link>
                            </SeeMoreBtn>
                        </div>
                    </div>
                </article>
            </section>
        </Layout>
    )
}