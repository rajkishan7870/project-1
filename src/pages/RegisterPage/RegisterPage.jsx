import React, { useRef } from "react";
import Button from "../../components/button/button";
import { getUsers } from "../../utils/localStorage";
import styles from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const emailRef = useRef();
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();

  const nav = useNavigate();

  function handleLogin() {
    nav("/login");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users = getUsers();
    users.push({
      email: emailRef.current.value,
      username: userNameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      password: passwordRef.current.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
    event.target.reset();
  }
  return (
    <div>
       
      <div className={styles.parentCont}>
        <div className={styles.registerPage}>
          <div>
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <span>
              <label>Email : </label>
              <input ref={emailRef} type="email" placeholder="Enter Email" />
            </span>

            <span>
              <label>Username : </label>
              <input ref={userNameRef} type="text" placeholder="username" />
            </span>
            <span>
              <label>First Name : </label>
              <input ref={firstNameRef} type="text" placeholder="First Name" />
            </span>

            <span>
              <label>Last Name : </label>
              <input ref={lastNameRef} type="text" placeholder="Last Name" />
            </span>
            <span>
              <label>Password : </label>
              <input ref={passwordRef} type="password" placeholder="password" />
            </span>
            <Button
              className={styles.signUpBtn}
              type="submit"
              data={"Sign Up"}
            />
          </form>

          <div>
            <span>
              Already Registered ??{" "}
              <Button onClick={handleLogin} data={"Login"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
