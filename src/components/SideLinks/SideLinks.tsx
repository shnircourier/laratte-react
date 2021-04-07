import React from 'react';
import './SideLinks.scss';


const sideLinks: React.FC = () => {
   return (
      <div className="side-links">
         <ul className="side-links__lists">
            <li className="side-links__list"><a className="side-links__link"><i className="fas fa-home"></i>Main</a></li>
            <li className="side-links__list"><a className="side-links__link"><i className="fas fa-book"></i>Follows</a></li>
            <li className="side-links__list"><a className="side-links__link"><i className="fab fa-hotjar"></i>Popular</a></li>
         </ul>
      </div>
   );
}


export default sideLinks;