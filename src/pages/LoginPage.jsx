import React from 'react'
import { useState } from 'react'
import Styles from './LoginPage.module.css'

import { Link } from 'react-router-dom'
// import Button from '../components/button'
export default function LoginPage() {


const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const[users,setUsers]=useState([])


  const handleEmail=(e)=>{
   setEmail( e.target.value)
    }
    const handlePassword=(e)=>{
      setPassword(e.target.value)
      }
      const handleSubmit=()=>{
   
      const userInfo={
           email:email,
           password:password,
      }
        // const users = localStorage.getItem('users');
        users.push(userInfo);

        localStorage.setItem('users',JSON.stringify(users))
        console.log(users)

        };

  return (

    
        <div className={Styles.mainContainer}>
          <img className={Styles.logo} src={"https://img.freepik.com/premium-vector/letter-logo-with-barbell-fitness-gym-logo-fitness-vector-logo-design-gym-fitness_227744-337.jpg?w=740"} alt="gym logo" />
          <img className={Styles.backgroundImage} src={"https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="gym img" />
          <form className={Styles.container}  action ="">
          <h1 className={Styles.head}>Log in</h1>
          <input className={Styles.inp1} type='email' placeholder='Enter Your Email' onChange={handleEmail} />
          <input className={Styles.inp1} type='password' placeholder='Enter Your Password' onChange={handlePassword} />
          <button className={Styles.button} onClick={handleSubmit}>Log In</button>    
          <Link to={"/register"} className={Styles.register}>Don't have an account?{"Register"}  </Link>
          
          </form>
          
        </div>
 
  )
}
