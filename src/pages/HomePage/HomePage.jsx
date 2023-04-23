import React from 'react'
import ImgContainer from '../../components/ImgContainer/ImgContainer'
import AboutPage from '../../pages/AboutPage/AboutPage'
import Training from '../TrainingPage/Training'
import PricingSection from '../../pages/PricingSection/PricingSection'
import Footer from '../../components/Footer/Footer'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.parentDiv}>
       
       <ImgContainer/> 

        <AboutPage/>

        <Training/>

        <PricingSection/>

        <Footer/>

    </div>
  )
}
