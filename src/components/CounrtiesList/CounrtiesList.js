import React from 'react';
import './countriesList.css';
import  { v4 as uuidv4 } from 'uuid';

class CounrtiesList extends React.Component{
  constructor(props){
    super(props);
    this.showCountries = this.showCountries.bind(this)
    this.createMilionPeople = this.createMilionPeople.bind(this)
  };
  
  createMilionPeople(item){
    const SPLIT = 1000;
    let number = item.population;
    let units, thousands, milions;

    units = number%SPLIT;
    number = number - units;
    thousands = number%(SPLIT*SPLIT);
    number = number - thousands;
    console.log(number)
    console.log(thousands)
    console.log(units)
    

    return (number , units)
  }

  showCountries(){
    if(this.props.countiesList.counrties.show && this.props.countiesList.counrties.data){
      return(
        this.props.countiesList.counrties.data.map( item => {
          return(
            <li key = {uuidv4()}>
              <div>
                <h3>{item.name}</h3>
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
      <div>
        { this.props.countiesList.counrties.show ? 
          <button onClick={this.props.hideCountry}>Hide Countries</button>:
          <button onClick={this.props.getCountry}>Show Countries</button>
        }
        {this.showCountries()}  
      </div>
    )
  }
}

export default CounrtiesList;