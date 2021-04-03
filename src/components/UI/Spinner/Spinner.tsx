import React from 'react';
import './Spinner.scss';

const spinner: React.FC = () => {
   return (
      <div className="spinner-container">
         <div className="loader">Loading...</div>
      </div>
   );
}


export default spinner;