import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

import Layout from "../layout/layout"
import SeeMoreBtn from '../buttons/seeMore';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import "../../styles/pages/accomodation_diet.css"
import ResidenceSlider from './accomodation_diet/residence_slider';
import FoodSlider from './accomodation_diet/food_slider';


export default function AccomodationAndDietPage(){
    const [animationClass, setAnimationClass] = useState("");

    const handleSlideChange = () => {
        setTimeout(() => {
            setAnimationClass("fadeIn");
        }, 10);
        setAnimationClass("");
    };

    return(
        <>
            {/* <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='slide slide1'>
                        <div className="content">
                            <h2 className={`${animationClass}`}>ACCOMODATION</h2>
                            <Link 
                                className="see_more_btn"
                                to="#accomodation_overview"
                                onClick={() => scrollToSection('accomodation_overview')}
                            >
                                <SeeMoreBtn>
                                    SEE MORE
                                </SeeMoreBtn>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slide slide3'>
                        <div className="content">
                            <h2 className={`${animationClass}`}>FOOD</h2>
                            <Link 
                                className="see_more_btn"
                                to="#food"
                                onClick={() => scrollToSection('food')}
                            >
                                <SeeMoreBtn>
                                    SEE MORE
                                </SeeMoreBtn>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> */}
            <article className='accomodation_overview' id='accomodation_and_diet'>
                <h2>Overview of accomodation</h2>
                <p>Peaceful jungle villas, fully isolated from external noise. 
                Conveniently located: 15 minutes on foot or 5 minutes by vehicle 
                from the city center and ocean shore.</p>
                <div className='accomodation_overview_coontent'>
                    <div className='accomodation_content'>
                        {/* <h2>Overview of accomodation</h2> */}
                        <p style={{ fontWeight: 'bold' }}>Each villa includes:</p>
                        <ul>
                            <li>King-size bed</li>
                            <li>Private modern bathroom with amenities</li>
                            <li>Riverside balcony</li>
                            <li>Air conditioning</li>
                            <li>Mini fridge</li>
                        </ul>
                        <p style={{ fontWeight: 'bold' }}>Facilities:</p>
                        <ul>
                            <li>Private green territory with a riverside restaurant and rooftop yoga zone</li>
                            <li>Shared kitchen and staff kitchen</li>
                            <li>SUP boards for river rafting</li>
                            <li>Friendly local animals: peacocks, monkeys, chipmunks, fish, and more</li>
                        </ul>
                    </div>
                    <div className='accomodation_img'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </article>
            <article className='residence_overview'>
                {/* <h2>Residence overview</h2> */}
                <p>The place we are in and our surroundings directly impact our overall
                well-being. Complete isolation from city noise, fresh clean air, birdsongs, 
                and the sound of water amidst lush jungles - this is what awaits you in our 
                NSR program</p>
                <p className='residence_down_text' data-aos="fade-up">-- Nature is the best healer --</p>
                <ResidenceSlider/>
            </article>
            <article className='food' id='food'>
                <h2>Food</h2>
                <div className='food_container'>
                    <div className='food_left_text'>
                        <p data-aos="fade-right" data-aos-duration="600">Only natural, organic food – free from GMOs, pesticides, and hormones</p>
                        <p data-aos="fade-right" data-aos-duration="600">Balanced, health-supporting nutrition</p>
                    </div>
                    <div className='food_slider_container'>
                        <FoodSlider />
                    </div>
                    <div className='food_right_text'>
                        <p data-aos="fade-left" data-aos-duration="600">Fresh, smoothies, juices and herbal teas available throughout the day</p>
                    </div>
                </div>
            </article>
        </>
    )
}