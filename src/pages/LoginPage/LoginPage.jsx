import React,{useRef} from 'react'
import Navbar from '../../components/Navbar'
import Button from '../../components/button/button'
import { getUsers } from '../../utils/localStorage';
import styles from './Login.module.css'

export default function LoginPage() {
  const userNameRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event){
    event.preventDefault();
    const users = getUsers()
    users.push({
      username : userNameRef.current.value,
      password : passwordRef.current.value
    })

    localStorage.setItem("users", JSON.stringify(users))
  }
  return (
    <div className={styles.parentCont}>
        <Navbar/>
        <div>
          <form  onSubmit={handleSubmit}>
            <span>
              <label>UserName : </label>
              <input ref={userNameRef} type='text' placeholder='username'/>
            </span>

            <span>
              <label>Password : </label>
              <input ref={passwordRef} type='password' placeholder='password' />
            </span>

            <Button type="submit" data={"Sign In"} />
          </form>
        </div>
    </div>
  )
}
