import React,{useState} from 'react';
import './components/styles/home.css';
import './components/styles/font.css';
import './App.css';
import Home from './components/HomePage/Home';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Cart from './components/Cart';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';


function App() {
  const [showSidebar,setShowSidebar] = useState(false);

  return (
    <Router>
      <div>
          <div className='home-cover fontDeew'>
              <Toolbar toggleSidebar={setShowSidebar}/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Shop" component={Shop}/>
                <Route path="/Cart" component={Cart} />
              </Switch>
              <SideDrawer isOpen={showSidebar} toggleSidebar={setShowSidebar}/>
              <Footer/>
          </div>
    </div>
   </Router>
  );

}

export default App;
