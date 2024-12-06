import React from "react";

import "../../../styles/pages/on_site_program/meditation.css"
import MeditationSlider from "./meditation_slider";

export default function Meditation(){
    return (
        <article className="meditations">
            <h2 className="block_title">Meditation</h2>
            <MeditationSlider />
        </article>
    )
}