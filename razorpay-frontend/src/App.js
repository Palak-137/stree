import React from "react";
import "./App.css";
import Header from "./Components/Header/header.js";
import {
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Pay from "./Pages/Pay/pay.js"
import Login from "./Pages/login/login.js"
import Signup from "./Pages/signup/signup";
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  return (
    <div>
      <Header>
        
      </Header>
   
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pay" element={<Pay user={userInfo} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        </Routes>

        {/* <p>Razorpay payment portal ezzzz</p>
        <a
          className="App-link"
          onClick={showRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pay now
        </a> */}

    </div>
  );
}

export default App;
