import React from "react";
import Layout from "../layout/layout";
import SeeMoreBtn from "../buttons/seeMore"

import "../../styles/pages/main_nsr_team.css"
import { Link } from "react-router-dom";

export default function MainNSRTeamPage(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <Layout>
             <section className="main_nsr_team_container">
                <article className="main_nsr_team">
                    <div className="teammate valentyna">
                        <div className="name">
                            Valentyna Smiy
                            <Link 
                                className="nsr_teammates" 
                                to={"#valentyna"} 
                                onClick={() => scrollToSection('valentyna')}
                            >
                                <SeeMoreBtn>
                                    SEE MORE
                                </SeeMoreBtn>
                            </Link>
                        </div>
                    </div>
                    <div className="teammate prasad">
                        <div className="name">
                            Dr. Prasad Muthunayake
                            <Link 
                                className="nsr_teammates" 
                                to={"#prasad"} 
                                onClick={() => scrollToSection('prasad')}
                            >
                                <SeeMoreBtn>
                                    SEE MORE
                                </SeeMoreBtn>
                            </Link>
                        </div>
                    </div>
                    <div className="teammate artemyi">
                        <div className="name">
                            Artemyi Frolov
                            <Link 
                                className="nsr_teammates" 
                                to={"#artemyi"} 
                                onClick={() => scrollToSection('artemyi')}
                            >
                                <SeeMoreBtn>
                                    SEE MORE
                                </SeeMoreBtn>
                            </Link>
                        </div>
                    </div>
                    <div className="teammate maryana">
                        <div className="name">
                            Maryana Hudyma
                            <Link 
                                className="nsr_teammates" 
                                to={"#maryana"} 
                                onClick={() => scrollToSection('maryana')}
                            >
                                <SeeMoreBtn>
                                    SEE MORE
                                </SeeMoreBtn>
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="team_container">
                    <h2>Founder of NSR</h2>
                    <div className="team_block lead" id="valentyna">
                        <div className="teammate_text">
                            Founder of NSR, with a higher education in medical sciences
                            and 8 years of medical practice. A proponent of natural and
                            integrative approaches in holistic problem-solving for human well-being
                            <div>
                                <p><span>International practice</span></p>
                                Retreat Therapist:
                                <p>AAHSL (Aurvedic Hospital, Sri Lanka)</p>
                                Cosmetologist:
                                <p>Poland, Kuwait, Ukraine, Sri Lanka</p>
                            </div>
                            <div>
                                <p><span>Specialization in:</span> cosmetic science, aestetic dermatology, psychotherapy, mind&body reset</p>
                            </div>
                        </div>
                        <div className="teammate_content">
                            <div className="teammate_img valentyna"></div>
                            <div className="teammate_title">
                                <p className="teammate_name">Valentyna Smyi</p>
                                <p className="teammate_position">B.S. Cosmetology, KAAFM Medicine and Health Science</p>
                            </div>
                        </div>
                    </div>
                    <h2>Team</h2>
                    <div className="team_block" id="prasad">
                        <div className="teammate_content">
                            <div className="teammate_img prasad"></div>
                        </div>
                        <div className="teammate_text">
                            <div className="teammate_title">
                                <p className="teammate_name">Dr. Prasad Muthunayake</p>
                                <p className="teammate_position">MD (ma) Ph.D</p>
                            </div>
                            A Native Sri Lanka alternative medical practitioner, 
                            who possess over two decades of healing journey starting from Sri Lanka to Europe and Eurasia
                            <div>
                                <p><span>International practice</span></p>
                                Retreat Therapist:
                                <p>AAHSL (Aurvedic Hospital, Sri Lanka)</p>
                                Cosmetologist:
                                <p>Poland, Kuwait, Ukraine, Sri Lanka</p>
                            </div>
                            <div>
                                <p><span>Specialization in:</span> cosmetic science, aestetic dermatology, psychotherapy, mind&body reset</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_block" id="artemyi">
                        <div className="teammate_content">
                            <div className="teammate_img artemyi"></div>
                        </div>
                        <div className="teammate_text">
                            <div className="teammate_title">
                                <p className="teammate_name">Artemyi Frolov</p>
                                <p className="teammate_position">B.S. Cosmetology, KAAFM Medicine and Health Science</p>
                            </div>
                            Founder of NSR, with a higher education in medical sciences
                            and 8 years of medical practice. A proponent of natural and
                            integrative approaches in holistic problem-solving for human well-being
                            <div>
                                <p><span>International practice</span></p>
                                Retreat Therapist:
                                <p>AAHSL (Aurvedic Hospital, Sri Lanka)</p>
                                Cosmetologist:
                                <p>Poland, Kuwait, Ukraine, Sri Lanka</p>
                            </div>
                            <div>
                                <p><span>Specialization in:</span> cosmetic science, aestetic dermatology, psychotherapy, mind&body reset</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_block" id="maryana">
                        <div className="teammate_content">
                            <div className="teammate_img maryana"></div>
                        </div>
                        <div className="teammate_text">
                            <div className="teammate_title">
                                <p className="teammate_name">Maryana Hudyma</p>
                                <p className="teammate_position">B.S. Cosmetology, KAAFM Medicine and Health Science</p>
                            </div>
                            Founder of NSR, with a higher education in medical sciences
                            and 8 years of medical practice. A proponent of natural and
                            integrative approaches in holistic problem-solving for human well-being
                            <div>
                                <p><span>International practice</span></p>
                                Retreat Therapist:
                                <p>AAHSL (Aurvedic Hospital, Sri Lanka)</p>
                                Cosmetologist:
                                <p>Poland, Kuwait, Ukraine, Sri Lanka</p>
                            </div>
                            <div>
                                <p><span>Specialization in:</span> cosmetic science, aestetic dermatology, psychotherapy, mind&body reset</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </Layout>
    )
}