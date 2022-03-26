import '../common/templete/dependencies'
import React from 'react'
import Header from '../common/templete/header';
import Sidebar from "../common/templete/sidebar";
import Footer from "../common/templete/footer";
import Routes from '../main/routes'

export default props => {
return(
    <div className='wrapper'>
       <Header/>
       <Sidebar/>
       <div className="content-wrapper">
         <Routes/>
       </div>
       <Footer/>
    </div>
)
}