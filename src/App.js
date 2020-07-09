import React from 'react';
import Shop from './shop' 
import Home from './home'
import Nav from './nav'
import About from './about'
import './scss/index.scss'
import Itemdetail from './itemdetail'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/about" component={About}/>
      <Route path="/shop/:id" component={Itemdetail}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
