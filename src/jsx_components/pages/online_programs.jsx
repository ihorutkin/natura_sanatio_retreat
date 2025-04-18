import React, { useState } from "react";
import Layout from "../layout/layout";
import "../../styles/pages/online_program.css";
import OnlineProgramModal from "../modal/onlineProgramModal";

export default function OnlineProgramPage() {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        // <Layout>
            <section className="online_container" id="online_program">
                <h2 data-aos="fade-up" data-aos-duration="600">ONLINE PROGRAM</h2>
                <p data-aos="fade-up" data-aos-duration="1000">Complex of personalized analizes by</p>
                <article className="online_plan">
                    <div className="box-2">
                        <div className="btn btn-two">
                            <button onClick={() => openModal("psychologist")}>PSYCHOLOGIST</button>
                        </div>
                        <OnlineProgramModal
                            isOpen={activeModal === "psychologist"}
                            onClose={closeModal}
                        >
                            <h2 style={{ fontFamily: "Rufina" }}>PSYCHOLOGIST</h2>
                            <p>
                                Official tests designed to uncover your personality type,
                                current mental state, temperament, intellectual level,
                                and cognitive functions. The results will help you gain a better
                                understanding of yourself.
                            </p>
                        </OnlineProgramModal>
                    </div>
                    <div className="box-2">
                        <div className="btn btn-two">
                            <button onClick={() => openModal("nutritionist")}>NUTRITIONIST</button>
                        </div>
                        <OnlineProgramModal
                            isOpen={activeModal === "nutritionist"}
                            onClose={closeModal}
                        >
                            <h2 style={{ fontFamily: "Rufina" }}>NUTRITIONIST</h2>
                            <p>
                                Gathering information about your physical state, as well as
                                current and potential health issues. Based on the collected data,
                                you will receive recommendations on suitable and unsuitable products
                                for your body type, following principles of ancient Asian medicine
                                and modern science.
                            </p>
                        </OnlineProgramModal>
                    </div>
                    <div className="box-2">
                        <div className="btn btn-two">
                            <button onClick={() => openModal("numerology")}>NUMEROLOGY</button>
                        </div>
                        <OnlineProgramModal
                            isOpen={activeModal === "numerology"}
                            onClose={closeModal}
                        >
                            <h2 style={{ fontFamily: "Rufina" }}>NUMEROLOGY</h2>
                            <p>
                                An additional tool from ancient knowledge to reveal a comprehensive
                                map of your character on deeper levels.
                            </p>
                        </OnlineProgramModal>
                    </div>
                </article>
                <article className="online_plan_additionaly">
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo fitness"></div>
                        <p>Personal home fitness exercises programs</p>
                    </div>
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo medical"></div>
                        <p>Holistic Medications prescription</p>
                    </div>
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo test"></div>
                        <p>Psychological tests for type of personality</p>
                    </div>
                    <div className="online_plan_item_add">
                        <div className="online_plan_add_logo mind_coaching"></div>
                        <p>Pre-post-program individual mind-coaching</p>
                    </div>
                </article>
            </section>
        // </Layout>
    );
}
