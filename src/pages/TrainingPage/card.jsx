import React from 'react';
import Carousel from 'better-react-carousel';
import Styles from'./Card.module.css'


function Card() {
  return (
    <div className={Styles.container}>
  
      <h1 className={Styles.heading}>Training Programs</h1>
     
      <Carousel cols={2} rows={1} gap={12} loop  className={Styles.swiper_container}>
     
 
        <Carousel.Item>
            <h2 className={Styles.head}>Weight Lifting Training</h2>
          <img className={Styles.pict} src="https://img.freepik.com/free-photo/gym-handsome-man-during-workout_144627-6224.jpg?size=626&ext=jpg&ga=GA1.1.658885505.1676437022&semt=ais" alt="slide_image" />
        </Carousel.Item>
        <Carousel.Item>
        <h2 className={Styles.head}>Yoga Training</h2>
          <img  className={Styles.pict} src="https://media.istockphoto.com/id/1254455335/photo/back-rear-view-young-professional-instructor-giving-yoga-master-class.jpg?s=612x612&w=0&k=20&c=XeBUJKuNUbgtsZfhE3aMfLuVZykgLg0BrKwfUl2NoXA=" alt="slide_image" />
        </Carousel.Item>
        <Carousel.Item>
        <h2 className={Styles.head}>Zumba Training</h2>
          <img  className={Styles.pict} src="https://media.istockphoto.com/id/670724074/photo/exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=jr9YMXFCD2ON4QsU9-ZdVSUd7tdR4vhx0TXaysfasTc=" alt="slide_image" />
        </Carousel.Item>
        <Carousel.Item>
        <h2 className={Styles.head}>Flexibility Training</h2>
          <img  className={Styles.pict} src="https://stamina11.com/wp-content/uploads/2023/03/Acquire-Flexibility-with-Martial-Arts.jpg" alt="slide_image" />
        </Carousel.Item>
        <Carousel.Item>
        <h2 className={Styles.head}>Strength Training</h2>
          <img  className={Styles.pict} src="https://images.ctfassets.net/psi7gc0m4mjv/23d45747-af59-40da-9b22-06fc14418433/b2b8fd4034625dc8c8be2c1711013e1c/hiit-and-strength-training-battle-ropes.jpg" alt="slide_image" />
        </Carousel.Item>
        <Carousel.Item>
            <h2 className={Styles.head}>Circuit Training</h2>
          <img className={Styles.pict} src="https://media.istockphoto.com/id/1067774764/photo/it-all-starts-with-determination.jpg?s=612x612&w=0&k=20&c=HQP48vtJZx7YC_0bx1POY52B4M--Hv5-rpM8IZF_Esk=" alt="slide_image" />
        </Carousel.Item>

    
      </Carousel>
      <img className={Styles.backimage} src='https://media.istockphoto.com/id/865428362/photo/fitness-center-background.jpg?s=612x612&w=0&k=20&c=wByuD_AJUOSQl3W7MCikZrQ1s0r13SEOlwSnZbG8bhE=' alt='background image' />
    </div>
  );
}

export default Card;