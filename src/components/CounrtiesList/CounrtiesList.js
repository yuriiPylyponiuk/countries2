import React from 'react';
import './countriesList.css';
import  { v4 as uuidv4 } from 'uuid';

class CounrtiesList extends React.Component{
  constructor(props){
    super(props);
    this.showCountries = this.showCountries.bind(this);
    this.createMilionPeople = this.createMilionPeople.bind(this);
    this.createCapital = this.createCapital.bind(this);
  };
  
  createMilionPeople(item){
    const SPLIT = 1000;
    let number = item.population;
    let units, thousands, milions;

    units = number%SPLIT;
    number = number - units;
    thousands = number%(SPLIT*SPLIT);
    number = number - thousands;
    return (number , units)
  }
  createCapital(item){
    if(Array.isArray(item.capital)){
      return 'More than 1 capital'
    }else{
      if(item.capital){
        return item.capital
      }else{
        return 'Country havent capitel'
      }
    }
  }

  showCountries(){
    if(this.props.countiesList.counrties.show && this.props.countiesList.counrties.data){
      return(
        this.props.countiesList.counrties.data.map( item => {
          return(
            <li key = {uuidv4()}>
              <div>
                <h3>{item.name}</h3>
                <p>Capital: {this.createCapital(item)}</p>
                <p>Population: {this.createMilionPeople(item)}</p>
              </div>
              <a href=""><img src={item.flag} alt=""/></a>
            </li>
          )
        })
      )
    }
  }

  render(){
    return(
      <div className='countries-list-main'>
        { this.props.countiesList.counrties.show ? 
          <button onClick={this.props.hideCountry} className='countries-list-main-btn'>Hide Countries</button>:
          <button onClick={this.props.getCountry} className='countries-list-main-btn'>Show Countries</button>
        }
        <ul>
          {this.showCountries()}  
        </ul>
      </div>
    )
  }
}

export default CounrtiesList;