import React from 'react';
import CountryContainer from '../../containers/Containerdata';
import Home from '../Home/Home';
import { Switch, Route, Link } from "react-router-dom";
import './app.css';
import NewCountryPage from '../../containers/CountryPageContainer';
import Footer from '../footer/Fotter';
import CreateNewForm from '../form/Form';

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
        <Route path="/countries/:item" component={NewCountryPage} />
        <Route exact path='/form'>
          <CreateNewForm />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
