import React from 'react';
import './Navbar.scss';

const navbar: React.FC = () => {
   return (
      <nav className="navbar">
         <ul className="navbar__lists">
            <li className="navbar__list"><a href="№" className="navbar__link">Sign in</a></li>
            <li className="navbar__list"><a href="№" className="navbar__link">Sign up</a></li>
         </ul>
      </nav>
   );
}


export default navbar;