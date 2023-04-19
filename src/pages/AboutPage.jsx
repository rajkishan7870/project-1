import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Styles from './AboutPage.module.css'



export default function AboutPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <h1 className={Styles.heading}>About Us</h1>
        <br/>
        <br/>
        <div className={Styles.subheading1}>
        <h1 >WE ARE GYM AND FITNESS</h1>
        <h3>Helping people live longer, happier and healthier lives for over 20 years.</h3>
        </div>
        <br/>
        <br/>
        <br/>
        <h2 className={Styles.subheading}>Our Facilities</h2>
        <br/>
        <br/>
        <div className={Styles.Facilities}>
          <div className='ratio-16x9'>
            <iframe width={660} height={315} src="https://www.youtube.com/embed/Im5wJLdudDg" title="YouTube video" allowFullScreen ></iframe>
          </div>
          <div>
          <p>This is Photoshop's version of Lorem Ipsum.
            Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor,
            nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
            Sed non</p>
            <button className={Styles.button3}>Learn more</button>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <h2 className={Styles.subheading}>Our Facilities</h2>
        <br/>
        <div className={Styles.About}>
          <div>
          <p>
          Instead of being just another gym equipment retailer, our founders wanted to be the best in the industry and set their minds to doing so! Over the last two decades Gym and Fitness has grown into one of Australia’s largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives.
          </p>
          <button className={Styles.button3}>Learn more</button>
          </div>

          <div className='ratio-16x9'>
            <iframe width={660} height={315} src="https://youtube.com/embed/qWy_aOlB45Y" title="YouTube video" allowFullScreen ></iframe>
          </div>
        </div>
        <div className={Styles.Other}>
          
        </div>
      </Container>
    </div>
  )
}
