import React, { useEffect } from "react";
import floating_meditation from "../../../media/img/recovery_plan/on_site/floating_meditation.jpg"
import floating_meditation2 from "../../../media/img/recovery_plan/on_site/floating_meditation2.jpg"
import nidra from "../../../media/img/recovery_plan/on_site/nidra.jpg"
import nidra2 from "../../../media/img/recovery_plan/on_site/nidra2.jpg"
import sukhasana from "../../../media/img/recovery_plan/on_site/sukhasana.jpg"
import sukhasana2 from "../../../media/img/recovery_plan/on_site/sukhasana2.jpg"

import "../../../styles/pages/on_site_program/meditation_slider.css"

export default function MeditationSlider(){
    useEffect(() => {
        const next = document.querySelector(".next");
        const prev = document.querySelector(".prev");

        const handleNextClick = () => {
            const items = document.querySelectorAll(".item");
            document.querySelector(".slide").appendChild(items[0]);
        };

        const handlePrevClick = () => {
            const items = document.querySelectorAll(".item");
            document.querySelector(".slide").prepend(items[items.length - 1]);
        };

        if (next && prev) {
            next.addEventListener("click", handleNextClick);
            prev.addEventListener("click", handlePrevClick);
        }

        // Убираем обработчики событий при размонтировании компонента
        return () => {
            if (next) next.removeEventListener("click", handleNextClick);
            if (prev) prev.removeEventListener("click", handlePrevClick);
        };
    }, []); // Пустой массив зависимостей - эффект выполнится только при монтировании
    return (
        <div className="container">

            <div className="slide">

                
                <div className="item" style={{ backgroundImage: `url(${floating_meditation})` }}>
                    <div className="content">
                        <div className="name">Floating meditations</div>
                        <div className="des">
                            Allows synchronization of the body's internal fluid
                            rhythms with the natural vibrations of living water, promoting 
                            comprehensive relaxation of both body and mind
                        </div>
                        {/* <button>See More</button> */}
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${floating_meditation2})` }}>
                    <div className="content">
                        <div className="name">Floating meditations</div>
                        <div className="des">
                            Allows synchronization of the body's internal fluid
                            rhythms with the natural vibrations of living water, promoting 
                            comprehensive relaxation of both body and mind
                        </div>
                        {/* <button>See More</button> */}
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${nidra})` }}>
                    <div className="content">
                        <div className="name">Nidra</div>
                        <div className="des">Thanks to the relaxed body position, it allows for focused attention
                            on the mind's deeper processes</div>
                        {/* <button>See More</button> */}
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${nidra2})` }}>
                    <div className="content">
                        <div className="name">Nidra</div>
                        <div className="des">With the guidance of a facilitator, 
                            participants can catch a beneficial flow of thoughts and discern the 
                            meaningful from the trivial</div>
                        {/* <button>See More</button> */}
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${sukhasana})` }}>
                    <div className="content">
                        <div className="name">Sukhasana</div>
                        <div className="des">A classic form of meditation that, through a seated posture, enhance
                            focus and concentration on the meditative process</div>
                        {/* <button>See More</button> */}
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${sukhasana2})` }}>
                    <div className="content">
                        <div className="name">Sukhasana</div>
                        <div className="des">It aids in scanning
                            and analizyng body signals, effectively stimulates the brain, and facilitates
                            the flow of life energy</div>
                        {/* <button>See More</button> */}
                    </div>
                </div>



            </div>

            <div className="button">
                <button className="prev">&lt;</button>
                <button className="next">&gt;</button>
            </div>

        </div>
    )
}