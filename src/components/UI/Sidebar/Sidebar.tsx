import React from 'react';
import './Sidebar.scss';

const sidebar: React.FC = props => {
   return (
      <div className="sidebar">
         {props.children}
      </div>
   );
}


export default sidebar;