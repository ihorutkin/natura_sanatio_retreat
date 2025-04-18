import React from "react";
import Layout from "../layout/layout";
import SeeMoreBtn from "../buttons/seeMore"

import "../../styles/pages/main_nsr_team.css"
import { Link } from "react-router-dom";

export default function MainNSRTeamPage(){
    return(
        <Layout>
            <section className="main_nsr_team_container">
                {/* <article className="main_nsr_team">
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
                </article> */}
                <article className="team_container">
                    <h2>Founder of NSR</h2>
                    <p className="teammate_position">B.S. Cosmetology, KAAFM Medicine and Health Science</p>
                    <div className="team_block lead" id="valentyna">
                        <div className="teammate_text">
                            Founder of NSR, with a higher education in medical sciences
                            and 8 years of medical practice. A proponent of natural and
                            integrative approaches in holistic problem-solving for human well-being
                            <div>
                            <ul>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Advanced Cosmetology – Poland, Kuwait, Ukraine, Sri Lanka:</span> Skin regeneration, anti-aging treatments, and psychodermatology.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Retreat Therapist – AAHSL (Ayurvedic Hospital, Sri Lanka):</span> Holistic body-mind reset, detox therapies, and integrative medicine.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Specialized Fields:</span> Cosmetic science, aesthetic dermatology, psychotherapy, neurobiology, and mind-body reset techniques.
                                </li>
                            </ul>
                            Bridging medicine, psychotherapy, and natural therapies to create personalized, globally recognized well-being solutions.
                            </div>
                            <div>
                                <p><span>Specialization in:</span> cosmetic science, aestetic dermatology, psychotherapy, mind&body reset</p>
                            </div>
                        </div>
                        <div className="teammate_content">
                            <div className="teammate_img valentyna"></div>
                            <div className="teammate_title">
                                <p className="teammate_name">Valentyna Smyi</p>
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
                            <ul>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Germany / Austria (2000 - 2013): </span> 
                                    Extensive medical practice in alternative and integrative medicine, 
                                    specializing in holistic healing approaches.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Visiting Lecturer: </span> 
                                    Peoples' Friendship University, Moscow, Russia (2008 - 2013): Academic expertise 
                                    in traditional medicine, acupuncture, and integrative therapeutic methods.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Medical Practitioner: </span> 
                                    Alternative Medical Institute, Sri Lanka (2014 - 2022): Specialized clinical practice 
                                    in traditional Sri Lankan medicine and evidence-based alternative therapies.
                                </li>
                            </ul>
                            <div>
                                <p><span>Specialization in</span></p>
                            </div>
                            <ul>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Traditional & Alternative Medicine: </span> 
                                    Native Sri Lankan healing methodologies combined with modern integrative approaches.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Acupuncture & Pain Management: </span> 
                                    Targeted treatments for chronic pain, including neck, back, and leg pain.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Gastrointestinal Disorders: </span> 
                                    Therapeutic interventions for gastritis, constipation, and digestive health optimization.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Stress & Neurological Regulation: </span> 
                                    Holistic techniques for stress management, headache relief, and nervous system balance.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="team_block" id="artemyi">
                        <div className="teammate_content">
                            <div className="teammate_img artemyi"></div>
                        </div>
                        <div className="teammate_text">
                            <div className="teammate_title">
                                <p className="teammate_name">Artemyi Frolov</p>
                                <p className="teammate_position">Yoga Instructor and Meditation Facilitator</p>
                            </div>
                            Artemyi is a group and personal coach with over ten years of experience 
                            and deep knowledge in spiritual practices, yoga and meditation. He is a 
                            coach who caan inspire a love for the practice, skillfully explaining the 
                            technical aspects and principles of both spiritual and physical practices
                            <ul>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Sri Lanka, Thailand, Malaysia, Indonesia: </span> 
                                    Conducting workshops, retreats, and personalized coaching sessions for individuals 
                                    and groups, focusing on holistic well-being and mind-body integration.
                                </li>
                            </ul>
                            <div>
                                <p><span>Specialized Yoga Disciplines</span></p>
                            </div>
                            <ul>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Hatha Yoga: </span> 
                                    Foundational postural alignment, breath control, and energy balance.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Vinyasa Yoga: </span> 
                                    Dynamic flow sequencing with breath-synchronized movement.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Ashtanga Yoga: </span> 
                                    Structured, progressive practice emphasizing strength, flexibility, 
                                    and endurance.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Kundalini Yoga: </span> 
                                    Activation of energy centers through breathwork, kriyas, and meditation.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Iyengar Yoga: </span> 
                                    Precision in alignment with a therapeutic approach utilizing props.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Yoga Nidra: </span> 
                                    Deep guided relaxation and conscious yogic sleep for mental clarity 
                                    and rejuvenation.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="team_block" id="maryana">
                        <div className="teammate_content">
                            <div className="teammate_img maryana"></div>
                        </div>
                        <div className="teammate_text">
                            <div className="teammate_title">
                                <p className="teammate_name">Maryana Hudyma</p>
                                <p className="teammate_position">Medical. Psychologist. Body-Oriented Psychotherapist.</p>
                            </div>
                            A highly trained psychologist and medical specialist with expertise in 
                            body-oriented psychotherapy, emphasizing self-awareness as the foundation 
                            for deep psychological transformation. By integrating somatic therapy with 
                            cognitive and emotional exploration, the therapeutic approach facilitates 
                            profound personal growth, emotional resilience, and inner harmony.
                            <ul>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Emotional Regulation & Anxiety Management: </span> 
                                    Addressing deep-seated fears, anxiety, and emotional dysregulation through somatic 
                                    awareness and therapeutic interventions.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Self-Esteem & Identity Development: </span> 
                                    Working with core beliefs that shape self-perception, self-worth, and confidence.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Self-Love & Personal Acceptance: </span> 
                                    Unraveling subconscious barriers to self-compassion, authenticity, and fulfillment.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Life Transitions & Decision-Making: </span> 
                                    Guiding individuals through moments of uncertainty, helping them align with their true path.
                                </li>
                            </ul>
                            <div>
                                <p><span>Therapeutic Philosophy</span></p>
                            </div>
                            <p>
                                The external world mirrors our internal landscape. Only 
                                through self-awareness, acceptance, and transformation of 
                                limiting beliefs can individuals reconnect with their authentic 
                                selves, unlock their potential, and navigate life with clarity 
                                and purpose.
                            </p>
                        </div>
                    </div>
                    <div className="team_block" id="maryana">
                        <div className="teammate_content">
                            <div className="teammate_img essam"></div>
                        </div>
                        <div className="teammate_text">
                            <div className="teammate_title">
                                <p className="teammate_name">Dr. Essam Al-Saleh, MD</p>
                                <p className="teammate_position">A distinguished medical professional affiliated with the Ministry 
                                of National Guard Health Affairs (MNGHA) and the owner of Al-Saleh Hospital.</p>
                            </div>
                            A highly trained psychologist and medical specialist with expertise in 
                            body-oriented psychotherapy, emphasizing self-awareness as the foundation 
                            for deep psychological transformation. By integrating somatic therapy with 
                            cognitive and emotional exploration, the therapeutic approach facilitates 
                            profound personal growth, emotional resilience, and inner harmony.
                            <ul>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Emotional Regulation & Anxiety Management: </span> 
                                    Addressing deep-seated fears, anxiety, and emotional dysregulation through somatic 
                                    awareness and therapeutic interventions.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Self-Esteem & Identity Development: </span> 
                                    Working with core beliefs that shape self-perception, self-worth, and confidence.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Self-Love & Personal Acceptance: </span> 
                                    Unraveling subconscious barriers to self-compassion, authenticity, and fulfillment.
                                </li>
                                <li style={{listStyle: "none", marginTop: "1rem"}}>
                                    <span style={{fontWeight: "bold"}}>Life Transitions & Decision-Making: </span> 
                                    Guiding individuals through moments of uncertainty, helping them align with their true path.
                                </li>
                            </ul>
                            <div>
                                <p><span>Therapeutic Philosophy</span></p>
                            </div>
                            <p>
                                The external world mirrors our internal landscape. Only 
                                through self-awareness, acceptance, and transformation of 
                                limiting beliefs can individuals reconnect with their authentic 
                                selves, unlock their potential, and navigate life with clarity 
                                and purpose.
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        </Layout>
    )
}