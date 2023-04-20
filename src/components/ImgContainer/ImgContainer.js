import React from 'react'
import Styles from './ImgContainer.module.css'

function ImgContainer() {

 return (

    <div className={Styles.parentDiv}>

        <div className = {Styles.imgCont}>
            <img className={Styles.imgs}src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='dummy'/>
        </div>

        <div className={Styles.homeContent}>

            <h1> chose your  Best Plan</h1>
            <p>Success is not final, failure is not fatal: It is the courage to continue that counts.</p>

            <button className={Styles.button} >check plans</button>
        </div>

    </div>
 )

}

export default ImgContainer