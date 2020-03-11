import React from 'react';
import './Toolbar.css';

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_nav">
        <i style={{cursor:'pointer'}} class="material-icons" onClick={() => props.toggleSidebar(true)}>menu</i>
        <div className="spacer"> </div>
        <div className="toolbar_nav_items">
            <ul>
            <li><a href="/"> HOME </a></li>
            <li><a href="/"> SHOP </a></li>
            <li><a href="/"> CART </a></li>
            </ul>
        </div>
      </nav>

    </header>
  );
}
export default Toolbar;
