import React from 'react';
import './Toolbar.css';
import Shop from '../Shop/Shop';

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_nav">
        <i style={{cursor:'pointer'}} class="material-icons toolbar-toggle-button" onClick={() => props.toggleSidebar(true)}>menu</i>
        <div className="spacer"> </div>
        <div className="toolbar_nav_items">
            <ul>
            <li><a href="/"> HOME </a></li>
            <li><a href='../Shop/Shop'> SHOP </a></li>
            <li><a href="/"> CART </a></li>
            </ul>
        </div>
      </nav>

    </header>
  );
}
export default Toolbar;
