import React from 'react';
import Layout from '../../layout/layout';
import SeeMoreBtn from "../../buttons/seeMore"

import "../../../styles/pages/main_nsr_team/maryana.css"
import "../../../styles/pages/main_nsr_team/base_team_style.css"
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
            <section className='teammate_intro maryana_img'>
                <article className='teammate_title_block'>
                    <h2 className='teammate_title' data-aos="fade-right" data-aos-duration="600">Maryana Hudyma</h2>
                    <p className='teammate_subtitle' data-aos="fade-right" data-aos-duration="1000">Yoga Instructor and Meditation Facilitator</p>
                    <p data-aos="fade-right" data-aos-duration="1400">
                        Fear, low self-esteem, lack of self-love, anxiety, confusion about oneself and the future—all answers lie deep within us.
                        The world is a reflection of our inner state.

                        Only through understanding and accepting yourself can you move forward, listen to, and truly feel yourself!
                        Deep-rooted beliefs are the obstacles to reaching your profound self!
                    </p>
                    <Link 
                            className='teammate_see_more_btn' 
                            to={"#international_practice"}
                            onClick={() => scrollToSection('international_practice')}
                    >
                        <SeeMoreBtn>
                            SEE MORE
                        </SeeMoreBtn>
                    </Link>
                </article>
            </section>
            <section className='international_practice' id='international_practice'>
                <article className='international_practice_content'>
                    <h2 className='teammate_title'>International Practice</h2>
                    <ul>
                        <li>Sri Lanka</li>
                        <li>Thailand</li>
                        <li>Malaysia</li>
                        <li>Indonesia</li>
                    </ul>
                </article>
                <article className='international_practice_img maryana_international_practice_img'></article>
            </section>
            <section className='spaecializaation' id='international_practice'>
                <article className='specialization_img maryana_specialization_img'></article>
                <article className='specialization_content'>
                    <h2 className='teammate_title'>Specialization</h2>
                    <ul>
                        <li>HATHA YOGA</li>
                        <li>VINYASA YOGA</li>
                        <li>ASHTANGA YOGA</li>
                        <li>KUNDALINI YOGA</li>
                        <li>IYENGAR YOGA</li>
                        <li>YOGA NIDRA</li>
                    </ul>
                </article>
            </section>
        </Layout>
    )
}