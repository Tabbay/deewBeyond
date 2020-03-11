import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => (
   <nav className="side-drawer">
      <ul>
        <li><a href="/"> HOME </a></li>
        <li><a href="/"> SHOP </a></li>
        <li><a href="/"> CART </a></li>

      </ul>
   </nav>
);
export default SideDrawer;
