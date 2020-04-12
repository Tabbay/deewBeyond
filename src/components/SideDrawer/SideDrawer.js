import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom'

const SideDrawer = props => (
   <>
      <div className={props.isOpen ? "backdrop show" : "backdrop"} onClick={() => props.toggleSidebar(false)}/>
      <nav className={props.isOpen ? "side-drawer show" : "side-drawer"}>
         <i style={{color:'#000',cursor:'pointer'}} class="material-icons" onClick={() => props.toggleSidebar(false)}>close</i>
         <ul>
           <Link to='/'>
               <li>HOME</li>
           </Link>
           <Link to = '/shop'>
               <li>SHOP</li>
           </Link>
           <Link to='/cart'>
               <li>CART</li>
           </Link>
         </ul>
      </nav>
   </>
);
export default SideDrawer;
