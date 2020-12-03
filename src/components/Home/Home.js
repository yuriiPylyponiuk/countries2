import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './homeStyle.css';

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
    document.title = 'Finder';
  }
  render(){
    return(
      <div className='home-page'>
        <Link className='home-page-link btn' to={"/countries"}>
          <h2 className='home-page-link-title'>Let`s lern something new</h2>
        </Link>
      </div>
    )
  }
}

export default Home;