import React from 'react'
// import Blank from './blankPage/Blank'
// import PageContent1 from './PageContent1';
import Footer from './Footer'
import LeftSideBar from './LeftSideBar'
import MyNavbar from './MyNavbar'
import PageContent2 from './PageContent2'
// import PreLoader from './PreLoader'
import RightSideBar from './RightSideBar'

const HomePage = () => {
  return (
    <div className="wrapper">
        {/* <Blank /> */}
        {/* <PreLoader /> */}
        <MyNavbar />
       
        <LeftSideBar />
        {/* <PageContent1 /> */}
        <PageContent2 />
        <Footer />
        <RightSideBar />
    </div>
  )
}

export default HomePage