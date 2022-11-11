import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")
  const [message, setMessage] = useState(false)

  const emailHandler=(e)=>{
    setEmail(e.target.value)
    // console.log(email)
  }

  const passwordHandler=(e)=>{
    setPassword(e.target.value)
    // console.log(password)
  }

  const signInData=(e)=>{
    e.preventDefault()
    let sData = {
      email: email,
      password: password
    }
    

    let config = {
      method: "post",
      url: "http://testapi.techenablers.info/api/auth/login",
      data: JSON.stringify(sData),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }

    axios(config)
    .then((res)=>{
      console.log("onSignInPageRes:",res);
      
      // localStorage.setItem("response", JSON.stringify(res))
      let token= res.data.access_token
      localStorage.setItem('token',token)
      localStorage.setItem("user-info",JSON.stringify(res))

      setEmail("");
      setPassword("");

      navigate("/HomePage")
      
    }).catch((error)=>{
      console.log("signInError:",error)
      let Error = error.response.data.error
      let PasswordError = error.response.data.password
      let EmailError = error.response.data.email
      console.log(Error)
      if(Error){
        setErrorMessage(Error)
        setMessage(true)
      }else if (PasswordError){
        setErrorMessage(PasswordError)
        setMessage(true)
      } else if (EmailError){
        setErrorMessage(EmailError)
        setMessage(true)
      } else{
        setErrorMessage("")
        setMessage(false)
      }
    })
    
  }

  return (

    <div className='d-flex justify-content-center'>
        <div className="login-box">
  <div className="login-logo">
    <a href='/'><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form>
        <div className="input-group mb-3">

          <input type="email" 
              onChange={emailHandler}
              value={email}
              className="form-control" 
              placeholder="Email" 
              />

          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">

          <input type="password" 
              onChange={passwordHandler}
              value={password}
              className="form-control" 
              placeholder="Password" 
              />


          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">

            <button type="submit" 
                  onClick={signInData}
                  className="btn btn-primary btn-block">
                      Sign In
            </button>
            {/* ................ */}
            <Snackbar open={message} autoHideDuration={5000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                  {errorMessage}
                </Alert>
            </Snackbar>
            {/* ................ */}

          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="/" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="/" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <Link to="/ForgotPassword">I forgot my password</Link>
      </p>
      <p className="mb-0">
        <Link to="/adminLte" className="text-center">Register a new membership</Link>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
{/* /.login-box */}
{/* jQuery */}
{/* Bootstrap 4 */}
{/* AdminLTE App */}

    </div>
  )
}

export default SignIn