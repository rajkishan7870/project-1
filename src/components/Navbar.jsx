import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
import { useNavigate } from 'react-router-dom'
import Styles from './Navbar.module.css'

export default function Navbar() {

    const navigate = useNavigate();

    const nav = [
        { navName: "Home", navpath: "/" },
        { navName: "About", navpath: "/about" },
        { navName: "Login", navpath: "/login" },
        { navName: "Pricing", navpath: "/pricing" }

    ]

    function handleNavigate() {
        navigate('/register')
    }

    return (
        <div className={Styles.ParentDiv}>
            <ul className={Styles.parentList}>
                {nav.map((element) => {
                    return (

                        <li className={Styles.listItems}><Link to={element.navpath}>{element.navName}</Link></li>
                    )
                })}
                <div className={Styles.Button}>
                    <Button onClick={handleNavigate} data={"Join Us"} />
                </div>
            </ul>

        </div>
    )
}
