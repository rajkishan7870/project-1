import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.parentDiv}>
        <div className={styles.divCont}>
        <div>
            <h1>GYM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem.</p>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>

        </div>

        <div>
            <h4>Healthy living</h4>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>

        <div>
            <h4>Services</h4>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>

        <div>
            <h4>Programmes</h4>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>
    </div>
        
        <hr/>
        <span>@2023 All Rights copy Received</span>
        
    </div>
  )
}
