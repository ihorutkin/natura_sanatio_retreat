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
                        </div>
                        <div className="packages_container">

                            <div className="package_item basic_packege">
                                <p class="package_title">Basic Retreat (5 Days)</p>
                                <ul>
                                    <li><span>Accommodation</span> – a private villa with an isolated, suprariverine balcony</li>
                                    <li><span>Diet</span> – enjoy healthy organic meals twice a day (we accommodate all dietary needs: vegan, vegetarian, pescetarian, etc.)</li>
                                    <li><span>Massage Therapy</span> – daily treatments to restore your physical body and energy flow</li>
                                    <li><span>Yoga</span> – daily sessions</li>
                                    <li><span>Meditation</span> – daily, following the Vipassana tradition</li>
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
                                    <li><span>Accommodation</span></li>
                                    <li><span>Diet</span> – two organic meals per day</li>
                                    <li><span>Massage (with acupuncture if needed)</span> – daily</li>
                                    <li><span>Surf Training</span> – 2 to 3 sessions during your stay</li>
                                    <li><span>Yoga</span> – daily</li>
                                    <li><span>Meditation</span> – daily</li>
                                    <li><span>Safari lagoon trip</span></li>
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
                                    <li><span>Ayurvedic Doctor Consultation</span> – including DOSHA analysis and personalized lifestyle advice</li>
                                    <li><span>Clinical Analysis</span> – bloodwork + consultation with a therapist</li>
                                    <li><span>Psychology Session</span> – including tests to assess temperament and mental state</li>
                                    <li><span>Personal Numerology Analysis</span> – delivered in PDF format</li>
                                    <li><span>Consultation with an Eating Behavior Specialist</span></li>
                                    <li><span>Personalized Skincare Recommendations (if needed)</span></li>
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