import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

const SignUp = () => {
  const navigate = useNavigate()
  const [fName, setFname] = useState("")
  const [lName, setLname] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState(false)

  const [emailMessage, setEmailMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)

  const [ErrorPmessage, setErrorPmessage] = useState(false)
  const [PasswordMessage, setPasswordMessage] = useState("")


  const fNameHandler=(e)=>{
    setFname(e.target.value)
  }

  const lNameHandler=(e)=>{
    setLname(e.target.value)
  }

  const userNameHandler=(e)=>{
    setUserName(e.target.value)
  }

  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }

  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }

  const phoneHandler=(e)=>{
    setPhone(e.target.value)
  }

  const register=(e)=>{
    
    e.preventDefault();

    if (fName.length > 0 && lName.length > 0 && userName.length > 0 && email.length > 0 && password > 0 && phone > 0){

      const SignUpData ={
        first_name: fName,
        last_name:  lName,
        username:   userName,
        email: email,
        password: password,
        phone: phone
      }

      let config = {
        method: "post",
        url: "https://www.foodapis.techenablers/api/register",
        data: JSON.stringify(SignUpData),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
  
      axios(config)
      .then((res)=>{
        console.log("Register-res",res);
        setMessage(true)

        setFname("")
        setLname("")
        setUserName("")
        setEmail("")
        setPassword("")
        setPhone("")

        navigate("/SignIn")

      }).catch((error)=>{
        console.log("Error:",error)
        let Error = JSON.parse(error.response.data)
        // console.log("error-message:",Error.email)
        if(Error.email){
          setErrorMessage(true)
          setEmailMessage(Error.email)

        }else if(Error.password){
          setErrorPmessage(true)
          setPasswordMessage(Error.password)
        } else {
          setErrorMessage(false)
          setErrorPmessage(false)
        }
        
      })      

    }else{
      navigate("/")
    }

  }

  return (

    <div className='d-flex justify-content-center hold-transition register-page'>
        <div className="register-box">
  <div className="register-logo">
    <h4><b>Admin</b>LTE</h4>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership/good sohail</p>
      <form>
        <div className='d-flex'>
        <div className="input-group mb-3 mr-1">
          <input type="text" 
              onChange={fNameHandler}
              value={fName}
              className="form-control" 
              placeholder="First Name" 
              />
          <div className="input-group-append">
            <div className="input-group-text">
            </div>
          </div>
        </div>
        <div className="input-group mb-3 ml-1">
          <input type="text" 
              onChange={lNameHandler}
              value={lName}
              className="form-control" 
              placeholder="Last Name" 
              />
          <div className="input-group-append">
            <div className="input-group-text">
            </div>
          </div>
        </div>
        </div>


        <div className="input-group mb-3">
          <input type="text" 
              onChange={userNameHandler}
              value={userName}
              className="form-control" 
              placeholder="User Name" 
              />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
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
        <div className="input-group mb-3">
          <input type="number"
              onChange={phoneHandler}
              value={phone} 
              className="form-control" 
              placeholder="phone" 
              />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-phone" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            {/* <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="/">terms</a>
              </label>
            </div> */}
          </div>
          
          <div className="col-4">
            <button type="submit" 
                onClick={register}
                className="btn btn-primary btn-block"
                >
                    Register
            </button>
            {/* .................................. */}
              <Snackbar open={message} autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                  You are Registered Successfully
                </Alert>
              </Snackbar>

              <Snackbar open={errorMessage} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                  {emailMessage}
                </Alert>
              </Snackbar>
              
              <Snackbar open={ErrorPmessage} autoHideDuration={5000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                  {PasswordMessage}
                </Alert>
              </Snackbar>
            {/* .................................. */}
          </div>
          
        </div>
      </form>
      {/* <div className="social-auth-links text-center">
        <p>- OR -</p>
        <a href="/" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="/" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div> */}
      <Link to="/SignIn" className="text-center">I already have an account</Link>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}
{/* jQuery */}
{/* Bootstrap 4 */}
{/* AdminLTE App */}

    </div>
  )
}

export default SignUp