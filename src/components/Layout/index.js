import React from 'react';
import Header from '../Header';
import MenuHeader from '../MenuHeader';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <>
      <Header />
      <MenuHeader />
      <div class="container">
        {props.children}
      </div>
      <div class="wrapper flex-grow-1"></div>
      <footer class="page-footer mt-auto font-small blue">
        <div class="footer-copyright text-center py-3">© 2021 Copyright:
          <a href="https://ratestar.com/"> Ratestar.tk</a>
        </div>
      </footer>
    </>
  )

}

export default Layout