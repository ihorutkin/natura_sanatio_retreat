import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Layout from "../layout/layout"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "../../styles/pages/accomodation_diet.css"


export default function AccomodationAndDietPage(){
    return(
        <Layout>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='slide slide1'>
                        <div className='content'>
                            <h2>ACCOMODATION AND DIET</h2>
                            {/* <p>The right environment and nutrition are fundamental
                            for holistic recovery and transformation at Natura Sanatio Retreat</p> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide2'>
                        <div className='content'>
                            <h2>RESIDENCE</h2>
                            {/* <p></p> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide3'>
                        <div className='content'>
                            <h2>FOOD</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <article className='accomodation_overview'>
                <div className='accomodation_content'>
                    <h2>Overview of accomodation</h2>
                    <ul>
                        <li>Comfortable and serene settings</li>
                        <li>Surrounded by nature</li>
                        <li>Designed for relaxation</li>
                        <li>In-house wellness facilities</li>
                        <li>Quiet spaces for reflection</li>
                    </ul>
                </div>
                <div className='accomodation_img'></div>
            </article>
        </Layout>
    )
}