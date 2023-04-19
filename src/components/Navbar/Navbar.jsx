import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Button from "../button/button";

export default function Navbar() {
  const navigate = useNavigate();

  const nav = [
    { navName: "Home", navpath: "/" },
    { navName: "About", navpath: "/about" },
    { navName: "Login", navpath: "/login" },
    { navName: "Training", navpath: "/training"}
  ];

  function handleJoinUs() {
    navigate("/register");
  }

  return (
    <div className={Styles.ParentDiv}>
      <h1 className={Styles.navbarLogo}>GYM</h1>

      <div>
        <ul className={Styles.parentList}>
          {nav.map((element) => {
            return (
              <li className={Styles.listItems}>
                <Link to={element.navpath}>{element.navName}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={Styles.Button}>
        <Button onClick={handleJoinUs} className={Styles.navButton} data={"Join Us"}/>
      </div>
    </div>
  );
}
