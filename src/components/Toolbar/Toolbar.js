import React from 'react';
import './Toolbar.css';
import deewLogo from '../../images/deewLogo.png';
import { Link } from 'react-router-dom'

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_nav">
        <i style={{cursor:'pointer'}} className="material-icons toolbar-toggle-button" onClick={() => props.toggleSidebar(true)}>menu</i>
        <div className="">
            <img className="deewLogo" src={deewLogo} alt="Logo" />
        </div>
        <div className="spacer"> </div>
        <div className="toolbar_nav_items">
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
        </div>
      </nav>

    </header>
  );
}

export default Toolbar;
