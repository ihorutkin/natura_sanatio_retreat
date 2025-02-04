import React from "react";
import Layout from "../layout/layout";

import Intro from "./main/intro";
import About from "./main/about";
import WhatWeOffer from "./main/what_we_offer";
import NaturaSanatio from "./main/sri_lanka";

export default function MainPage(){
    return(
        <div style={{ overflow: "hidden"}}> 
            <Layout>
                <Intro />
                {/* <NaturaSanatio /> */}
                <About />
                <WhatWeOffer />
            </Layout>
        </div>
    )
}