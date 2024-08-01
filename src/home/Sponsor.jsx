import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay} from 'swiper/modules';

const sponsorList = [
    {
        imgUrl: "/src/assets/images/sponsor/ale-logo.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/attrattivo logo.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/carmacoma logo.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/only logo.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/desiree logo.svg",
    },
];

const Sponsor = () => {
    return (
        <div className='sponsor-section section-bg'>
            <div className='container'>
                <div className='sectiona-wrapper'>
                    <div className='sponsor-slider'>
                    <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={
            {
            delay: 2000,
            spaceBetween: 20,
        }
    }
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
            sponsorList.map((val, i) =>(
                <SwiperSlide key={i}>
                <div className='sponsor-item'>
                   <div className='sponsor-thumb'>
                     <img src={val.imgUrl} alt=''/>
                   </div>
                </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Sponsor