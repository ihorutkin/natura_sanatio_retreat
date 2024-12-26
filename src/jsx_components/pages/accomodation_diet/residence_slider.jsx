import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../../../styles/pages/accomodation/residence_overview.css"

import { EffectCoverflow, Pagination } from 'swiper/modules';

import residence1 from "../../../media/img/accomodation/residence_overview/residence1.JPG"
import residence2 from "../../../media/img/accomodation/residence_overview/residence2.JPG"
import residence3 from "../../../media/img/accomodation/residence_overview/residence3.JPG"
import residence4 from "../../../media/img/accomodation/residence_overview/residence4.JPG"
import residence5 from "../../../media/img/accomodation/residence_overview/residence5.PNG"
import residence6 from "../../../media/img/accomodation/residence_overview/residence6.PNG"
import residence7 from "../../../media/img/accomodation/residence_overview/residence7.PNG"
import residence8 from "../../../media/img/accomodation/residence_overview/residence8.PNG"
import residence9 from "../../../media/img/accomodation/residence_overview/residence9.PNG"
import residence10 from "../../../media/img/accomodation/residence_overview/residence10.PNG"


export default function ResidenceSlider(){
    return(
        <div className='residence_slider'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 10,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                initialSlide={2}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={residence1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence8} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence9} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residence10} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}