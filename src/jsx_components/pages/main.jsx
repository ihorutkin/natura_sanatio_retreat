import React from "react";
import Layout from "../layout/layout";

import Intro from "./main/intro";
import About from "./main/about";
// import AOS from "aos"
import WhatWeOffer from "./main/what_we_offer";

export default function MainPage(){
    // AOS.init();
    return(
        <div style={{ overflow: "hidden" }}>
            <Layout>
                <Intro />
                <About />
                <WhatWeOffer />
            </Layout>
        </div>
    )
}