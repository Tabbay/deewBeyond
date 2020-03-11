import React,{useState} from 'react';
import './components/styles/home.css';
import './components/styles/font.css';
import './App.css';
import Login from './components/Login';
import CoverStrip from './components/HomePage/CoverStrip';
import Paypal from'./components/Paypal';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {

  return (
    <div>

        <div className='home-cover fontDeew'>
            <Toolbar />
            <SideDrawer />
            <Backdrop />
            <main style={{marginTop: '64px'}}>
                <p> THIS IS THE PAGE CONTENT! </p>
            </main>

            <CoverStrip/>
            <Paypal/>
        </div>

   </div>

  );

}

export default App;
