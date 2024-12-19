import React from 'react';
import Layout from '../../layout/layout';
import SeeMoreBtn from "../../buttons/seeMore"

import "../../../styles/pages/main_nsr_team/valentyna.css"
import { Link } from 'react-router-dom';

export default function Valentyna(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <Layout>
            <section className='teammate_intro'>
                <article className='teammate_title_block'>
                    <h2 className='teammate_title' data-aos="fade-right" data-aos-duration="600">Valentyna Smyi</h2>
                    <p className='teammate_subtitle' data-aos="fade-right" data-aos-duration="1000">B.S. Cosmetology, KAAFM Medicine and Health Science</p>
                    <p data-aos="fade-right" data-aos-duration="1400">Founder of NSR, with a higher education in medical sciences
                    and 8 years of medical practice. A proponent of natural and
                    integrative approaches in holistic problem-solving for human well-being</p>
                    <SeeMoreBtn>
                        <Link 
                            className='teammate_see_more_btn' 
                            to={"#international_practice"}
                            onClick={() => scrollToSection('international_practice')}
                        >SEE MORE</Link>
                    </SeeMoreBtn>
                </article>
            </section>
            <section className='international_practice' id='international_practice'>
                <article className='international_practice_content'>
                    <h2 className='teammate_title'>International Practice</h2>
                    <ul>
                        <li>
                            Retreat Therapist:
                            <div>AAHSL (Aurvedic Hospital, Sri Lanka)</div>
                        </li>
                        <li>
                            Cosmetologist:
                            <div>Poland, Kuwait, Ukraine, Sri Lanka</div>
                        </li>
                    </ul>
                </article>
                <article className='international_practice_img'></article>
            </section>
            <section className='spaecializaation' id='international_practice'>
                <article className='specialization_img'></article>
                <article className='specialization_content'>
                    <h2 className='teammate_title'>Specialization</h2>
                    <ul>
                        <li>
                            COSMETIC SCIENCE
                        </li>
                        <li>
                            AESTETIC DERMATOLOGY
                        </li>
                        <li>
                            PSYCHOTHERAPY
                        </li>
                        <li>
                            MIND&BODY RESET
                        </li>
                    </ul>
                </article>
            </section>
        </Layout>
    )
}