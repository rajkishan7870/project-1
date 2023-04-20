import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Styles from './AboutPage.module.css'



export default function AboutPage() {

  const shoot = () => {
      alert("clicked from about us section!")
  }
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
            <button onClick={shoot}className={Styles.button3}>Learn more</button>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <h2 className={Styles.subheading}>Elite Coches</h2>
        <br/>
        <div className={Styles.About}>
          <div>
          <p>
          Our coaches are elite athletes who have dedicated their lives to fitness. They must pass a rigorous, science-backed certification process designed exclusively for our GYM. you Must visit our GYM and our Trainers are realy good. They do very hard work.
          </p>
          <button onClick={shoot} className={Styles.button3}>Learn more</button>
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
