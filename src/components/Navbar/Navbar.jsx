import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Button from "../button/button";

export default function Navbar() {
  const navigate = useNavigate();

  const [bar,setBar]=useState("fas fa-bars")
  const [clas,setClas]=useState("parentList")
   const handelBar=()=>{
    setBar(bar=="fas fa-bars"? "fas fa-times" : " fas fa-bars")
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
  

  return (
    <div className={Styles.ParentDiv}>
      <h1 className={Styles.navbarLogo}>GYM</h1>

      <div>  
      <ul className={`${bar=="fas fa-bars" ? Styles.parentList : Styles.parent}`}  >
          {nav.map((element) => {
            return (
              <li className={Styles.listItems}>
                <Link to={element.navpath}>{element.navName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div id={Styles.mobile}>
    <i className={bar} onClick={handelBar} id="bar"></i>
    </div>
      <div className={Styles.Button}>
        <Button onClick={handleJoinUs} className={Styles.navButton} data={"Join Us"}/>
      </div>
    

     
    </div>
  );
}
