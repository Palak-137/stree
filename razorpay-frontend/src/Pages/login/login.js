import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userAction'
import history from '../../history';
import {useLocation,Navigate} from "react-router-dom"

function Login() {
    const location = useLocation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const [name, setName] = useState('')
  
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
  
    const redirect = '/pay'
  
    useEffect(() => {
        if (userInfo) {
          
            history.push(redirect);
            setAuth(true);
            // return(
            // <Navigate replace={true} to="/pay" />
            // )
        }

    }, [history, userInfo, redirect])
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
    }
    
  return (
      <div id="login">
          <div class={"container"} id="container" >
                <div class="form-container sign-in-container">
                    <form  method='post' onSubmit={submitHandler}>
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" onChange={e=>{setEmail(e.target.value)}} placeholder="Email" />
                        <input type="password" onChange={e=>{setPassword(e.target.value)}} placeholder="Password" />
                      <a href="#">Forgot your password?</a>
                      {
                         auth ? "You are already logedin" : ""
                      }
                        <button disabled={auth} type="submit">Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn" >Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Link to="/signup" class="ghost" id="signUp" >Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Login