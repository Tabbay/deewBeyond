import React,{useState} from 'react';
import './components/styles/home.css';
import './components/styles/font.css';
import './App.css';
import CoverStrip from './components/HomePage/CoverStrip';
import Paypal from'./components/Paypal';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
<<<<<<< HEAD
import Backdrop from './components/Backdrop/Backdrop';
import Shop from './components/Shop/Shop';
=======
import Cart from './components/Cart';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

>>>>>>> navigation

function App() {
  const [showSidebar,setShowSidebar] = useState(false);

  return (
    <Router>
      <div>
          <div className='home-cover fontDeew'>
              <Toolbar toggleSidebar={setShowSidebar}/>
              <Switch>
                <Route path="/" exact component={CoverStrip}/>
                <Route path="/Shop" />
                <Route path="/Cart" component={Cart} />
              </Switch>
              <SideDrawer isOpen={showSidebar} toggleSidebar={setShowSidebar}/>
              <main style={{marginTop: '64px'}}>
                  <p> THIS IS THE PAGE CONTENT! </p>
              </main>

              <Paypal/>
          </div>
    </div>
   </Router>
  );

}

export default App;
