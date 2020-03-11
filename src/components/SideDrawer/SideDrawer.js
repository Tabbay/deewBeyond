import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => (
   <>
      <div className={props.isOpen ? "backdrop show" : "backdrop"} onClick={() => props.toggleSidebar(false)}/>
      <nav className={props.isOpen ? "side-drawer show" : "side-drawer"}>
         <i style={{color:'#000',cursor:'pointer'}} class="material-icons" onClick={() => props.toggleSidebar(false)}>close</i>
         <ul>
            <li><a href="/"> HOME </a></li>
            <li><a href="/"> SHOP </a></li>
            <li><a href="/"> CART </a></li>
         </ul>
      </nav>
   </>
);
export default SideDrawer;
