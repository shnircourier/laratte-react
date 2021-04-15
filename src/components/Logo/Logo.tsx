import React from 'react';
import { useHistory } from 'react-router-dom';
import logoPath from '../../assets/images/logo.svg';
import './Logo.scss';

const Logo: React.FC = () => {

   const history = useHistory();

   const redirectToMainHandler = () => {
      history.push('/');
   }

   return (
      <div className="logo-container" onClick={() => redirectToMainHandler()}>
         <img src={logoPath} alt="" />
         <h1>La Ratte</h1>
      </div>
   );
}



export default Logo;