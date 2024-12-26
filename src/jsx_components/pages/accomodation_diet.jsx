import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Layout from "../layout/layout"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "../../styles/pages/accomodation_diet.css"
import ResidenceSlider from './accomodation_diet/residence_slider';


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
            <article className='residence_overview'>
                <h2>Residence overview</h2>
                <p>The place we are in and our surroundings directly impact our overall
                well-being. Complete isolation from city noise, fresh clean air, birdsongs, 
                and the sound of water amidst lush jungles - this is what awaits you in our 
                NSR program</p>
                <p className='residence_down_text'>-- Nature is the best healer --</p>
                <ResidenceSlider/>
            </article>
        </Layout>
    )
}