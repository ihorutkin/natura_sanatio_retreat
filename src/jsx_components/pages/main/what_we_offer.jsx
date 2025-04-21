import React from "react";

import "../../../styles/pages/main/what_we_offer.css"

export default function WhatWeOffer(){
    return(
        <section className="offers_container" id="what_we_offer">
            <div className="offers_block">
                <div className="offers_content">
                    <article className="offers_text_block">
                        <div className="offers_title" data-aos="fade-left" data-aos-duration="1000">
                            <h2>What we offer</h2>
                            {/* <p>Get your first step for new life with us!</p> */}
                        </div>
                        <div className="packages_container">

                            <div className="package_item basic_packege">
                                <p class="package_title">Basic Retreat (5 Days)</p>
                                <ul>
                                    <li>Accommodation – a private villa with an isolated, suprariverine balcony</li>
                                    <li>Diet – enjoy healthy organic meals twice a day (we accommodate all dietary needs: vegan, vegetarian, pescetarian, etc.)</li>
                                    <li>Massage Therapy – daily treatments to restore your physical body and energy flow</li>
                                    <li>Yoga – daily sessions</li>
                                    <li>Meditation – daily, following the Vipassana tradition</li>
                                </ul>
                                <p style={{fontWeight: 'bold', textAlign: 'center'}}>Expected Results:</p>
                                <ul>
                                    <li>Full mental, physical, and spiritual recharge</li>
                                    <li>Improvement in general health</li>
                                    <li>Normalization of digestion and potential weight balance</li>
                                    <li>Increased mobility</li>
                                    <li>Acquisition of practical knowledge and self-care skills</li>
                                    <li>A sense of harmony with yourself and the world</li>
                                </ul>
                            </div>

                            <div className="package_item reast_and_joy_package">
                                <p class="package_title">Rest & Joy (5 Days)</p>
                                <ul>
                                    <li>Accommodation</li>
                                    <li>Diet – two organic meals per day</li>
                                    <li>Massage (with acupuncture if needed) – daily</li>
                                    <li>Surf Training – 2 to 3 sessions during your stay</li>
                                    <li>Yoga – daily</li>
                                    <li>Meditation – daily</li>
                                    <li>Safari lagoon trip</li>
                                </ul>
                                <p style={{fontWeight: 'bold', textAlign: 'center'}}>Expected Results:</p>
                                <ul>
                                    <li>Deep physical relaxation and stress relief through therapeutic massage and acupuncture</li>
                                    <li>Enhanced connection with nature and inner peace through lagoon safari and meditation</li>
                                    <li>Improved flexibility, strength, and balance from daily yoga practice</li>
                                    <li>A more mindful and present state of being, inspired by daily meditative practice</li>
                                    <li>Lasting memories and a sense of joy from unique adventures and serene surroundings</li>
                                </ul>
                            </div>

                            <div className="package_item full_package">
                                <p class="package_title">Full Experience (7 Days)</p>
                                <p style={{fontWeight: 'bold', textAlign: 'center'}}>Online Preparation:</p>
                                <ul>
                                    <li>Ayurvedic Doctor Consultation – including DOSHA analysis and personalized lifestyle advice</li>
                                    <li>Clinical Analysis – bloodwork + consultation with a therapist</li>
                                    <li>Psychology Session – including tests to assess temperament and mental state</li>
                                    <li>Personal Numerology Analysis – delivered in PDF format</li>
                                    <li>Consultation with an Eating Behavior Specialist</li>
                                    <li>Personalized Skincare Recommendations (if needed)</li>
                                </ul>
                                <p style={{fontWeight: 'bold', textAlign: 'center'}}>On-Site Experience:</p>
                                <ul>
                                    <li>Accommodation + personalized diet</li>
                                    <li>Yoga & Meditation</li>
                                    <li>Face and Body Therapies</li>
                                    <li>Surfing Classes</li>
                                    <li>Safari Tour</li>
                                    <li>Psychiatric Support (if needed)</li>
                                    <li>2-Day Vipassana Retreat – a meditative immersion in full silence, based on ancient monastic techniques for deep self-exploration</li>
                                </ul>
                            </div>

                            <div className="package_item custom_package">
                                <p class="package_title">Create Your Own Retreat</p>
                                <p style={{ fontSize: '24px', textAlign: 'center' }}>Customize your experience according to your personal needs and desires.</p>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}