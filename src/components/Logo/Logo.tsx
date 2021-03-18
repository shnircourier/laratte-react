import React from 'react';
import logoPath from '../../assets/images/logo.svg';
import './Logo.scss';

const logo: React.FC = () => {
   return (
      <div className="logo-container">
         <img src={logoPath} alt="" />
         <h1>La Ratte</h1>
      </div>
   );
}



export default logo;