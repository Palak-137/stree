import React from 'react'
import "./header.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import { logout } from '../../actions/userAction'

export default function () {
  
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
          <header id="header" class="fixed-top  header-transparent ">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
          <h1><a href="/">
           STREE <img src={logo}></img>
          </a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><Link class="nav-link scrollto active" to="/">Home</Link></li>
          <li><Link class="nav-link scrollto" to="/">Contact</Link></li>
            <li><Link class="getstarted scrollto" to="/pay">Pay Now</Link></li>
            {userInfo ?  <li><button class="getstarted scrollto"  onClick={logoutHandler}>
              SignOut
            </button></li> : 
            <li><Link class="getstarted scrollto" to="/login">
              Sign In
            </Link></li>
            }
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}
