import React from 'react';
import CountryContainer from '../../containers/Containerdata';
import Home from '../Home/Home';
import { Switch, Route, Link } from "react-router-dom";
import './app.css';

function App() {
  return (
    <div className="App">
      <Link to={"/"} className='app-btn-main btn' >Home</Link>

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/countries">
          <CountryContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
