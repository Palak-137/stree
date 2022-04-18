import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div id="login">
    <div class="container right-panel-active" id="container" >

          <div class="form-container sign-up-container">
              <form action="#">
                  <h1>Create Account</h1>
                  <div class="social-container">
                      <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <span>or use your email for registration</span>
                  <input type="text" placeholder="Name" />
                  
                      <input type="email" placeholder="Email" />
                      
                      <input type="password" placeholder="Password" />
                      
                      <input type="text" placeholder="Pan Number" />

                      <input type="text" placeholder="UPI" />

                      <button>Sign Up</button>
                      
              </form>
          </div>
          <div class="form-container sign-in-container">
              <form action="#">
                  <h1>Sign in</h1>
                  <div class="social-container">
                      <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <span>or use your account</span>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <a href="#">Forgot your password?</a>
                  <button>Sign In</button>
              </form>
          </div>
          <div class="overlay-container">
              <div class="overlay">
                  <div class="overlay-panel overlay-left">
                      <h1>Welcome Back!</h1>
                      <p>To keep connected with us please login with your personal info</p>
                      <Link to="/login" class="ghost" id="signUp">Sign In</Link>
                  </div>
                  {/* <div class="overlay-panel overlay-right">
                      <h1>Hello, Friend!</h1>
                      <p>Enter your personal details and start journey with us</p>
                      <Link to="/login" class="ghost" id="signUp">Sign In</Link>
                  </div> */}
              </div>
          </div>
      </div>

  </div>
  )
}

export default Signup