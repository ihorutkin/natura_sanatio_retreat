import React from "react";

import "../../../styles/pages/on_site_program/group_therapy.css"

export default function GroupTherapy(){
    return (
        <article className="group_therapy">
            <h2 className="block_title" data-aos="fade-up" data-aos-duration="600">Group therapy and education</h2>
            <p data-aos="fade-up" data-aos-duration="1000">Group therapies can be just as effective as individual ones, 
            sometimes even more so. NSR provides an atmosphere of understanding
            and support for its participants, enhriching them with knowledge and 
            motivation. YOU ARE NOT ALONE!</p>
            <div className="therapies_types">
                <div className="column column1">
                    <ul>
                        <li className="therapies_item" data-aos="fade-right" data-aos-duration="600"><span>Neuroplasticity: </span>"How to rewrite your neural
                        connections and make your brain work for you"</li>
                        <li className="therapies_item" data-aos="fade-right" data-aos-duration="600"><span>Self-awareness: </span>"The importance of self-reflection
                        and the skill of controlling one's emotional state, objectivity in 
                        perceiving reality and one's own abilities."</li>
                        <li className="therapies_item" data-aos="fade-right" data-aos-duration="600"><span>Philosophy of Ancient Sciences: </span>"Wisdom in decision-making and handling
                        uncontrollable situations." The balance of "Self and the World."</li>
                    </ul>
                </div>
                <div className="column column2">
                    <ul>
                        <li className="therapies_item" data-aos="fade-left" data-aos-duration="600"><span>Psychology: </span>"Key aspects of how our psyche works."
                        "Personality type and the skill of collaborating with it."</li>
                        <li className="therapies_item" data-aos="fade-left" data-aos-duration="600"><span>Q&A with Experts: </span>"Group Discussion on Common Challenges"</li>
                        <li className="therapies_item" data-aos="fade-left" data-aos-duration="600"><span>Nutrition: </span>"The importance of proper nutrition selection."
                        "The interconnection of nutrition, psyche, physical condition, and beauty."</li>
                        <li className="therapies_item" data-aos="fade-left" data-aos-duration="600"><span>DIY Cosmetology: </span>"Core principles of quality care for youth
                        and beauty." "Making the right choice - all about skin, cosmetics, and the principles
                        of their interaction."</li>
                    </ul>
                </div>
            </div>
        </article>
    )
}