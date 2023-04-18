import React from 'react'

import Navbar from '../../components/Navbar'

import ImgContainer from '../../components/ImgContainer'
import styles from './HomePage.module.css'



export default function HomePage() {
  return (

    <div className={styles.parentDiv}>

      <Navbar />
      <ImgContainer />


    </div>
  )


}
