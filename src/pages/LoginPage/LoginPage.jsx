import React,{useState, useRef, useEffect} from 'react'
import Button from '../../components/button/button'
import { getUsers } from '../../utils/localStorage';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { isUserLogInAtom } from '../Recoil';
import {useSetRecoilState} from 'recoil'

export default function LoginPage() {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const[userList,setUserList] = useState([{
    usename : "",
    password : ""
  }])
  
  const nav = useNavigate();

  const user=useSetRecoilState(isUserLogInAtom)

  useEffect(()=>{
    const data = getUsers(); 
    setUserList(data);
   },[])
  

  function handleSubmit(event){
    event.preventDefault();
    
    if(userNameRef.current.value === "" || passwordRef.current.value === ""){
      alert("FIll the form first")
    }


     const userObj = userList.find((obj)=> obj?.username === userNameRef.current.value && obj?.password === passwordRef.current.value)
      
    if(userObj !== undefined){
      user(true)
      alert(`${userObj?.username} you are succ login`);
      if(userList.find((obj)=> obj?.purchased===true && obj?.username === userNameRef.current.value)){
        
          nav("/")
      }
      else{
        nav("/pricing")
      
      }
    }else{
      alert("please register first")
    }
  }

  function handleSignUp(){
    nav('/register')
  }
  return (

   <div>
      
    <div className={styles.parentCont}>

      <div className = {styles.login}>

            <div>
                <h1>Login</h1>
            </div>
            <div>
              <form  onSubmit={handleSubmit}>
                <span>
                  <label>UserName : </label>
                  <input ref={userNameRef} type='text' placeholder='username' required/>
                </span>

                <span>
                  <label>Password : </label>
                  <input ref={passwordRef} type='password' placeholder='password' required/>
                </span>

                <Button className = {styles.signInBtn} type="submit" data={"Sign In"} />
              </form>
            </div>
            <div>
              <span>Don't Have an account ?? <Button className={styles.signUpBtn} onClick={handleSignUp} data = {"Sign Up"}/></span>
            </div>

        </div>
    </div>
    </div>
   
  )
}
