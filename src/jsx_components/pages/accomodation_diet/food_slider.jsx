import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../../styles/pages/accomodation/food_slider.css"

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';

import food1 from "../../../media/img/accomodation/food/slider/food1.png"
import food3 from "../../../media/img/accomodation/food/slider/food3.png"
import food4 from "../../../media/img/accomodation/food/slider/food4.png"
import food5 from "../../../media/img/accomodation/food/slider/food5.png"


export default function FoodSlider(){
    return(
        <div className='food_slider'>
            <Swiper
                effect={'flip'}
                speed={1000}
                // grabCursor={true}
                // pagination={true}
                // navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={food1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food5} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}