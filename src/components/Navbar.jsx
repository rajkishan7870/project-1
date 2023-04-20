import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
import { useNavigate } from 'react-router-dom'
import Styles from './Navbar.module.css'

export default function Navbar() {

    const navigate = useNavigate();

    const [state, setState]=useState("fas fa-times")
    const [mediaNav, setMediaNav]=useState("#parentList")

    const handelClick=()=>{
        setState( state=="fas fa-bars" ? "fas fa-times":"fas fa-bars" )
        setMediaNav(mediaNav=="#parentList" ? " #parentList active":"#parentList")
    }
    
    
    const nav = [
        { navName: "Home", navpath: "/" },
        { navName: "About", navpath: "/about" },
        { navName: "Login", navpath: "/login" }
    ]

    function handleNavigate() {
        navigate('/register')
    }




    return (
        <div className={Styles.ParentDiv}>
            <h1 className={Styles.navbarLogo}>GYM</h1>


            <div>


                <ul id={Styles.parentList} className={mediaNav} onClick={handelClick} >

                    {nav.map((element) => {
                        return (

                            <li className={Styles.listItems}><Link to={element.navpath}>{element.navName}</Link></li>
                        )
                    })}

                </ul>

            </div>

            <div className={Styles.Button}>
                <button className={Styles.navButton} >Join Us</button>
            </div>
            <div id={Styles.mobile}>
                <i className={state} onClick={handelClick } name="close-outline" ></i>
               
            </div>
           
        </div>
    )
}
