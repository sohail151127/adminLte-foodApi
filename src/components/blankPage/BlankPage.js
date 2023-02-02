import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import LeftSideBar from '../LeftSideBar'
import MyNavbar from '../MyNavbar'
import BorderedTable from './BorderedTable'

const BlankPage = () => {
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
            <Link to="/Form" className='btn btn-success'>Add Something</Link>
          </p>


         <BorderedTable />




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

export default BlankPage