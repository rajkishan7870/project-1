import React from 'react'
import ImgContainer from '../../components/ImgContainer/ImgContainer'
import AboutPage from '../../pages/AboutPage/AboutPage'
import Training from '../TrainingPage/Training'
import PricingSection from '../../pages/PricingSection/PricingSection'
import Footer from '../../components/Footer/Footer'
import styles from './HomePage.module.css'
import { useEffect } from 'react'
import { isUserLogInAtom } from '../Recoil'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

  const isUserLogedIn = useRecoilValue(isUserLogInAtom);
  
  const navigate=useNavigate()

  useEffect(() => {
  
    if (!isUserLogedIn) {
      navigate('/login');
    }else{
      navigate("/")
    }
  }, []);


  return (
    <div id='Home' className={styles.parentDiv}>
       
       <ImgContainer/> 

        <AboutPage/>

        <Training/>

        <PricingSection/>

        <Footer/>

    </div>
  )
}
