import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Card.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Card() {
  return (
    <div className="container">

      <h1 className="heading">Training Programs</h1>
      <img className='img3' src="https://w0.peakpx.com/wallpaper/90/1006/HD-wallpaper-motivation-sayings-quotes-quote-thisiskraniax-thisisnova-best-gym-combat-success-thumbnail.jpg" alt="motivation gym" />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}

        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',

          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className='imges'>
        <SwiperSlide>
            <h2 className='head'>Weight Lifting Training</h2>
          <img src="https://img.freepik.com/free-photo/gym-handsome-man-during-workout_144627-6224.jpg?size=626&ext=jpg&ga=GA1.1.658885505.1676437022&semt=ais" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        <h2 className='head'>Yoga Training</h2>
          <img src="https://media.istockphoto.com/id/1227389270/photo/fitness-woman-and-man-practicing-yoga-class-in-gym-asian-girl-training-and-teach-her.jpg?b=1&s=170667a&w=0&k=20&c=iBP7HIb0IDXq_WDsylK2YdTxXkKPiXHqBFJiyQLfSSo=" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        <h2 className='head'>Zumba Training</h2>
          <img src="https://media.istockphoto.com/id/670724074/photo/exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=jr9YMXFCD2ON4QsU9-ZdVSUd7tdR4vhx0TXaysfasTc=" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        <h2 className='head'>Flexibility Training</h2>
          <img src="https://stamina11.com/wp-content/uploads/2023/03/Acquire-Flexibility-with-Martial-Arts.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        <h2 className='head'>Strength Training</h2>
          <img src="https://images.ctfassets.net/psi7gc0m4mjv/23d45747-af59-40da-9b22-06fc14418433/b2b8fd4034625dc8c8be2c1711013e1c/hiit-and-strength-training-battle-ropes.jpg" alt="slide_image" />
        </SwiperSlide>
        </div>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Card;