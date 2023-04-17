import React, { useRef } from 'react'
import Navbar from '../../components/Navbar'
import Button from '../../components/button/button'
import { getUsers } from '../../utils/localStorage';
import styles from './RegisterPage.module.css'

export default function RegisterPage() {

    const emailRef = useRef();
    const userNameRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const passwordRef = useRef();


    function handleSubmit(event) {
        event.preventDefault();
        const users = getUsers()
        users.push({
            email: emailRef.current.value,
            username: userNameRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            password: passwordRef.current.value
        })


        localStorage.setItem('users', JSON.stringify(users))

    }
    return (
        <div className={styles.parentCont} >
            <Navbar />

            <div className={styles.registerPage}>
                <form onSubmit={handleSubmit}>
                    <span>
                        <label>Email : </label>
                        <input ref={emailRef} type="email" placeholder='Enter Email' />
                    </span>

                    <span>
                        <label>Username : </label>
                        <input ref={userNameRef} type="text" placeholder='username' />
                    </span>
                    <span>
                        <label>First Name</label>
                        <input ref={firstNameRef} type="text" placeholder='First Name' />
                    </span>


                    <span>
                        <label>Last Name</label>
                        <input ref={lastNameRef} type="text" placeholder='Last Name' />
                    </span>
                    <span>
                        <label>Password</label>
                        <input ref={passwordRef} type="password" placeholder='password' />

                    </span>
                    <Button type="submit" data={"Sign Up"} />
                </form>


            </div>

        </div>
    )
}
