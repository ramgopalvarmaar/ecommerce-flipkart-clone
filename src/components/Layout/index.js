import React from 'react';
import Header from '../Header';
import MenuHeader from '../MenuHeader';
import ratestarLogo from "../../images/logo/ratestar-bgremoved.png";

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <>
      <Header />
      <div class="container" style={{ marginBottom: "15px" }}>
        {props.children}
      </div>
      <div class="wrapper flex-grow-1"></div>
      <footer class="page-footer mt-auto font-small" style={{backgroundColor:"#505252", marginTop:"10px"}}>
        <div class="footer-copyright text-center" style={{color:"white"}}>© 2021 Copyright:
          <a href="https://ratestar.tk/" style={{color:"white"}}> Ratestar.tk</a>
        </div>
      </footer>
    </>
  )

}

export default Layout