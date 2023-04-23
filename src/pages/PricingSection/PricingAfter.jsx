import React from 'react'
import Button from '../../components/button/button'
import { useNavigate } from 'react-router-dom'
import styles from './PricingAfter.module.css'

export default function PricingAfter() {

    const nav = useNavigate();

    function handleGo(){
        nav("/")
    }
  return (
    <div className={styles.parentDiv}>
        <h3>You purchased a plan. Now you can go to HomePage</h3>
        <Button onClick={handleGo} data={"Go to Home"}/>

    </div>
  )
}
