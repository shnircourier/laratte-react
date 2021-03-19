import React from 'react';
import './Navbar.scss';

const navbar = () => {
   return (
      <nav className="navbar">
         <ul className="navbar__lists">
            <li className="navbar__list"><a href="№" className="navbar__link">Главная</a></li>
            <li className="navbar__list"><a href="№" className="navbar__link">Вход</a></li>
         </ul>
      </nav>
   );
}


export default navbar;