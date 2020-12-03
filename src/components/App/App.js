import React from 'react';
import CountryContainer from '../../containers/Containerdata';
import Home from '../Home/Home';
import { Switch, Route, Link } from "react-router-dom";
import './app.css';
import NewCountryPage from '../../containers/CountryPageContainer';
import Footer from '../footer/Fotter';
import CreateNewForm from '../form/FormSign';
import LogIn from '../form/FormLOg';

function App() {
  return (
    <div className="App">
      <div className="app-btn-main">
        <Link to={"/home"} className=' btn' >Home</Link>
        <Link to={"/form"} className=' btn btn-signup' >Sign up</Link>
      </div>
      <Switch>
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/countries">
          <CountryContainer />
        </Route>
        <Route path="/countries/:item" component={NewCountryPage} />
        <Route exact path='/form'>
          <CreateNewForm />
        </Route>
        <Route exact path='/login'>
          <LogIn />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
