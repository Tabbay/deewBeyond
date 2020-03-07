import React from 'react';
import logo from './logo.svg';
import './components/Login'
import './components/styles/home.css';
import './components/styles/font.css';
import './App.css';
import Login from './components/Login';
import CoverStrip from './components/HomePage/CoverStrip';
import MyApp from'./components/MyApp'

function App() {
  return (
    <div>
      <div className='navigation-bar'>
      
      </div>
      <div className='home-cover fontDeew'>
          <CoverStrip/>
      </div>
      <div className='home-shop'>
          <Login/>
      </div>
      <div className='home-ourStory'>
          <Login/>
          <MyApp/>
      </div>
    </div>
    
    
    
  );
}

export default App;
