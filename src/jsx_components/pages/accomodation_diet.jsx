import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Layout from "../layout/layout"
import SeeMoreBtn from '../buttons/seeMore';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "../../styles/pages/accomodation_diet.css"
import ResidenceSlider from './accomodation_diet/residence_slider';
import FoodSlider from './accomodation_diet/food_slider';


export default function AccomodationAndDietPage(){
    const [animationClass, setAnimationClass] = useState("");

    const handleSlideChange = () => {
        // Удаляем анимацию и добавляем заново
        setTimeout(() => {
            setAnimationClass("fadeIn");
        }, 10);
        setAnimationClass("");
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <Layout>
            <Swiper
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
                    <div className='slide slide2'>
                        <div className="content">
                            <h2 className={`${animationClass}`}>RESIDENCE OVERVIEW</h2>
                            <Link 
                                className="see_more_btn"
                                to="#residence_overview"
                                onClick={() => scrollToSection('residence_overview')}
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
            </Swiper>
            <article className='accomodation_overview' id='accomodation_overview'>
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
            <article className='residence_overview' id='residence_overview'>
                <h2>Residence overview</h2>
                <p>The place we are in and our surroundings directly impact our overall
                well-being. Complete isolation from city noise, fresh clean air, birdsongs, 
                and the sound of water amidst lush jungles - this is what awaits you in our 
                NSR program</p>
                <p className='residence_down_text'>-- Nature is the best healer --</p>
                <ResidenceSlider/>
            </article>
            <article className='food' id='food'>
                <h2>Food</h2>
                <div className='food_container'>
                    <div className='food_left_text'>
                        <p data-aos="fade-right" data-aos-duration="600">You will enjoy balanced meals twice daily.</p>
                        <p data-aos="fade-right" data-aos-duration="600">Homemade dishes are 
                        prepared from organic, natural ingredients based on nutritionist recipes,
                        along with fresh juices and special herbal tea throughout the day.</p>
                    </div>
                    <div className='food_slider_container'>
                        <FoodSlider />
                    </div>
                    <div className='food_right_text'>
                        <p data-aos="fade-left" data-aos-duration="600">The diet is designed for detoxification and body cleansing, weight
                        loss and the restoration of your body's biochemical balance.</p>
                    </div>
                </div>
            </article>
        </Layout>
    )
}