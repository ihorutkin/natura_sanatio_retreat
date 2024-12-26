import React from 'react';
import Layout from '../../layout/layout';
import SeeMoreBtn from "../../buttons/seeMore"

import "../../../styles/pages/main_nsr_team/prasad.css"
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
            <section className='teammate_intro prasad_img'>
                <article className='teammate_title_block'>
                    <h2 className='teammate_title' data-aos="fade-right" data-aos-duration="600">Dr. Prasad Muthunayake</h2>
                    <p className='teammate_subtitle' data-aos="fade-right" data-aos-duration="1000">MD (ma) Ph.D</p>
                    <p data-aos="fade-right" data-aos-duration="1400">A Native Sri Lanka alternative medical practitioner, 
                    who possess over two decades of healing journey starting from Sri Lanka to Europe and Eurasia</p>
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
                        <li>Germany / Austria (2000 - 2013)</li>
                    </ul>
                    <h2 className='teammate_title'>Academic & Practice</h2>
                    <ul>
                        <li>
                            Visiting Lectuurer Peoples Friendship University Moscow, Russia (2008 - 2013)
                        </li>
                        <li>Medical practitioner at Alternative Medical Institute, Sri Lanka (2014 - 2022)</li>
                    </ul>
                </article>
                <article className='international_practice_img prasad_international_practice_img'></article>
            </section>
            <section className='spaecializaation' id='international_practice'>
                <article className='specialization_img prasad_specialization_img'></article>
                <article className='specialization_content'>
                    <h2 className='teammate_title'>Specialization</h2>
                    <ul>
                        <li>NATIVE MEDICIN AND ACUPUNCTURE</li>
                        <li>NECK PAIN, BACK PAIN, LEG PAIN</li>
                        <li>GASTRITIS & CONSTIPATION, HEADACHE</li>
                        <li>STRESS MANAGMENT</li>
                    </ul>
                </article>
            </section>
        </Layout>
    )
}