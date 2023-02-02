import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import LeftSideBar from '../LeftSideBar'
import MyNavbar from '../MyNavbar'

const Form = () => {
  return (
    <div>
        {/* Site wrapper */}
<div className="wrapper">


{/* Navbar */}
    <MyNavbar />
{/* /.navbar */}


{/* Main Sidebar Container */}
    <LeftSideBar />
{/* Main Sidebar Container */}


{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Tasks</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Blank Page</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card">
      
      <div className="card-body">
        {/* Start creating your amazing application!.................... */}

        <p>
          <Link to="/BlankPage" className='btn btn-default'>Back</Link>
        </p>

        <div className='row'>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <form action="" method="post">
                    <div className='form-group'>

                        <div className='row'>
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                                <label htmlFor="">First Name</label>
                                <input type="text" className='form-control' id="" placeholder='First Name' />
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                                <label htmlFor="">Last Name</label>
                                <input type="text" className='form-control' id="" placeholder='Last Name' />
                            </div>
                        </div>
                        <label htmlFor="">Father Name</label>
                        <input type="text" className='form-control' id="" placeholder='Father Name' />

                        <label htmlFor="">Address</label>
                        <input type="text" className='form-control' id="" placeholder='Address' />


                        <button type="submit" className='btn btn-primary mt-2'>Submit</button>

                    </div>
                </form>

            </div>

        </div>
      




      </div>
      {/* /.card-body */}
      
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}



{/* footer */}
 <Footer />
{/* footer */}



{/* Control Sidebar */}
<aside className="control-sidebar control-sidebar-dark">
  {/* Control sidebar content goes here */}
</aside>
{/* /.control-sidebar */}
</div>

    </div>
  )
}

export default Form