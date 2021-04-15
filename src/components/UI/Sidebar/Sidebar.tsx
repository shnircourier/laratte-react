import React from 'react';
import './Sidebar.scss';

const sidebar: React.FC = props => {
   return (
      <aside className="sidebar">
         {props.children}
      </aside>
   );
}


export default sidebar;