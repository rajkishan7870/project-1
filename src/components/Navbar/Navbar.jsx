import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Button from "../button/button";

export default function Navbar() {
  const navigate = useNavigate();

  const [state, setState]=useState("fas fa-times")
  const [mediaNav, setMediaNav]=useState("#parentList")

  const handelClick=()=>{
      setState( state==="fas fa-bars" ? "fas fa-times":"fas fa-bars" )
      setMediaNav(mediaNav==="#parentList" ? " #parentList active":"#parentList")
  }

  const nav = [
    { navName: "Home", navpath: "/" },
    { navName: "About", navpath: "/about" },
    { navName: "Pricing", navpath: "/pricing" },
    { navName: "Training", navpath: "/training"}
  ];

  function handleJoinUs() {
    navigate("/register");
  }

  function handleLogo(){
    navigate("/")
  }



  return (
    <div className={Styles.ParentDiv}>
      <h1 onClick={handleLogo} className={Styles.navbarLogo}>GYM</h1>

      <div>
      <ul id={Styles.parentList} className={mediaNav} onClick={handelClick} >
          
              <div className={Styles.listItems}>
                <a href="#About">About Us</a>
                <a href="#Training">Training</a>
                <a href="#Pricing">Pricing</a>
              </div>
            
          
          
        </ul>
      </div>

      <div className={Styles.Button}>
        <Button onClick={handleJoinUs} className={Styles.navButton} data={"Join Us"}/>
      </div>

      <div id={Styles.mobile}>
                <i className={state} onClick={handelClick } name="close-outline" ></i>

            </div>
    </div>
  );
}
