import React from 'react'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className='d-flex justify-content-center hold-transition register-page'>
        <div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Here you can easily retrieve a new password</p>
      <form action="recover-password.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Request new password</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <p className="mt-3 mb-1">
        <Link to="/SignIn">Login</Link>
      </p>
      <p className="mb-0">
        <Link to="/" className="text-center">Register a new membership</Link>
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

export default ForgotPassword