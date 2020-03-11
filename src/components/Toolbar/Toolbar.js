import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
    <header className="toolbar">
      <nav className="toolbar_nav">
        <div>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
          <div> </div>
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
export default toolbar;
