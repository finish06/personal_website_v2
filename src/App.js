import React from 'react';
import './App.css';
import Home from './pages/home.js'
import Home_Temps from './pages/temps.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="hidden">
          <ul>
            <li>
              <Link to="/">Home</Link>        
            </li>
            <li>
              <Link to="/graphs">Home Temps</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/graphs">
            <Home_Temps />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


