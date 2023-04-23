import style from "./Navbar.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const Navigate = useNavigate();
  const [ismenuchange, setIsmenuchange] = useState(false);

  const handelMenubar = () => {
    setIsmenuchange(!ismenuchange);
    console.log(ismenuchange);
  };

  function handleGYM(){
    Navigate("/")
  }
  return (
    <div  className={`${ismenuchange ? style.active : "no"}`}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          
            <h1 onClick={handleGYM}>GYM</h1>
       
        </div>

        <ul className={style.navlist}>
          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Training">Training</a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li>
        </ul>

        <button
          onClick={() => {
            Navigate("/Register");
          }}
          className={style.loginBtn}
        >
          Join US
        </button>- 
        <div className={style.manubar}>
          <span className={style.menu} onClick={handelMenubar}>
            <BiMenu />
          </span>
          <span className={style.closeIcon} onClick={handelMenubar}>
            <FaWindowClose />
          </span>
        </div>
      </nav>
    </div>
  );
}
