import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")


  const nameHandler=(e)=>{
    setName(e.target.value)
    // console.log("name:",name)
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value)
    // console.log("email:",email)
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
    // console.log("password:",password)
  }
  const retypePasswordHandler=(e)=>{
    setRetypePassword(e.target.value)
    // console.log("retypePassword:",retypePassword)
  }

  const register=()=>{
    
    console.log("sohail")
    let registrationData = {
      name,
      email,
      password,
      retypePassword
    }
    console.log("registrationData:",registrationData)
    localStorage.setItem("register", JSON.stringify(registrationData))

    navigate("/SignIn")
  }

  return (

    <div className='d-flex justify-content-center hold-transition register-page'>
        <div className="register-box">
  <div className="register-logo">
    <h4><b>Admin</b>LTE</h4>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form>
        <div className="input-group mb-3">
          <input type="text" 
              onChange={nameHandler}
              value={name}
              className="form-control" 
              placeholder="Full name" 
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
          <input type="password"
              onChange={retypePasswordHandler}
              value={retypePassword} 
              className="form-control" 
              placeholder="Retype password" 
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
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="/">terms</a>
              </label>
            </div>
          </div>
          
          <div className="col-4">
            <button type="submit" 
                onClick={register}
                className="btn btn-primary btn-block"
                >
                    Register
            </button>
          </div>
          
        </div>
      </form>
      <div className="social-auth-links text-center">
        <p>- OR -</p>
        <a href="/" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="/" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div>
      <Link to="/SignIn" className="text-center">I already have a membership</Link>
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