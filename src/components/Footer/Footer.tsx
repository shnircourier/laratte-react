import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.scss';

const footer: React.FC = () => {
   return (
      <>
         <Logo />
         <div className="footer__links">
            <a href=""><i className="fab fa-telegram-plane"></i></a>
            <a href=""><i className="fab fa-vk"></i></a>
            <a href=""><i className="fab fa-discord"></i></a>
            <a href=""><i className="fab fa-github"></i></a>
         </div>
         <div className="footer__copyright">
            <span className="footer__info">Copyright <i className="far fa-copyright"></i> 2021</span>
         </div>
      </>
   );
}


export default footer;