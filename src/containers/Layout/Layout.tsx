import React from 'react';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Layout.scss';

const Layout: React.FC<{}> = props => {
   return (
      <>
         <header className="header">
            <div className="header__container container">
               <Logo />
               <Navbar />
            </div>
         </header>
         <main className="main">
            <div className="main__container container">{props.children}</div>
         </main>
         <footer className="footer">
            <div className="footer__container container">
               <Footer />
            </div>
         </footer>
      </>
   );
}

export default Layout;