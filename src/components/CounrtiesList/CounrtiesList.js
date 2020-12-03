import React from 'react';
import './countriesList.css';
import  { v4 as uuidv4 } from 'uuid';
import FindCountryContainer from '../../containers/FindContainer';
import { Link, useParams } from "react-router-dom";
import CountryPage from '../item/countryPage';

class CounrtiesList extends React.Component{
  constructor(props){
    super(props);
    this.showCountries = this.showCountries.bind(this);
    this.createMilionPeople = this.createMilionPeople.bind(this);
    this.createCapital = this.createCapital.bind(this);
  };
  
  createMilionPeople(item){
    const MILIONNUM = 1000000;
    const THOUSANDNUM = 1000;
    let number = item.population;
    let thousands, milions;
    let milStr='', thouStr='';

    milions= number/MILIONNUM;
    milions= +milions.toFixed();
    if(milions> 0){
      milStr = ` ${milions},`
    }

    number = number % MILIONNUM;
    thousands = number/THOUSANDNUM;
    thousands= +thousands.toFixed();
    if(thousands> 0){
      thouStr = `${thousands},`;
    }
    
    number = number % THOUSANDNUM;
    if(number<100){
      number = `0${number}`;
      if(number<10){
        number = `0${number}`;
      }
    }

    let finalStr = milStr+thouStr+number
    return ( <span>{finalStr}</span> )
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

  componentDidMount(){
    this.props.getCountry()
  }

  showCountries(){
    if(this.props.countries.show ){
      if(this.props.countries.data.length> 0){
        return(
          this.props.countries.data.map( (item, index) => {
            if(index < this.props.loadMore){
              return(
                <li key = {uuidv4()} className='countries-list-main-ul-li' >
                  <Link  to={{ pathname: `/countries/${item.name}`}} params={{item:item}} className='linkToCountry'>
                    <div className='countries-list-main-ul-li-info'>
                      <h3>{item.name}</h3>
                      <p>Capital: {this.createCapital(item)}</p>
                      <p>Population: {this.createMilionPeople(item)}</p>
                    </div>
                    <a href="#" className='countries-list-main-ul-li-img'><img src={item.flag} alt=""/></a>
                  </Link>
                </li>
              )
            }
          })
        )

      }
    }
  }

  render(){
    console.log(this.props)
    return(
      <div className='countries-list-main'>
        { this.props.countries.show ? 
          <button onClick={this.props.hideCountry} className='btn countries-list-main-btn'>Hide Countries</button>:
          <button onClick={this.props.showCountry} className='btn countries-list-main-btn'>Show Countries</button>
        }
        <FindCountryContainer />
        <ul className='countries-list-main-ul'>
          {this.showCountries()}  
        </ul>
        <div className="addNextPage">
          { this.props.findingData ?
            <p></p>:
            <button onClick={this.props.loadMoreCountries} className='btn'>Load More...</button>
          }
        </div>
      </div>
    )
  }
}

export default CounrtiesList;