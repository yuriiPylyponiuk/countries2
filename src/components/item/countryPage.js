import React from 'react';
import  { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from "react-router-dom";
import './countryPage.css'

class CountryPage extends React.Component{
  constructor(props){
    super(props);
    this.showCountries = this.showCountries.bind(this);
    this.createMilionPeople = this.createMilionPeople.bind(this);
    this.createCapital = this.createCapital.bind(this);
  }
  componentDidMount(){
    const link = 'https://restcountries.eu/rest/v2/name/';
    let newUrl = this.props.match.params.item;

    newUrl= newUrl[0].toUpperCase() + newUrl.slice(1).toLowerCase();
    newUrl = link + newUrl;
    this.props.getNewCountry(newUrl)
  }
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
  showCountries(){
    if(this.props.countriesList.countries.show && this.props.countriesList.countries.data){
      return(
        this.props.countriesList.countries.data.map( item => {
          return(
            <li key = {uuidv4()} className='countries-list-main-ul-li country-list-ul' >
              <div className='countries-list-main-ul-li-info'>
                <h2>{item.name}</h2>
                <h3>Capital: {this.createCapital(item)}</h3>
                <h3>Population: {this.createMilionPeople(item)}</h3>
                {item.regionalBlocs.length > 0 && 
                  <p>RegionalBlocs: {item.regionalBlocs[0].name}</p>}
                <p>Currencies: {item.currencies[0].name}</p>
                <p>Native Name: {item.nativeName}</p>
                <p>Languages: {item.languages[0].name}  <br /> Native language name: {item.languages[0].nativeName}</p>
                <ul>
                  {item.regionalBlocs.map((item2) => {
                   for(let key in item2){
                     <li>{item2[key]}</li>
                   }
                  })}
                </ul>
              </div>
              <a href="#" className='countries-list-main-ul-li-img'><img src={item.flag} alt=""/></a>
            </li>
          )
        })
      )
    }
  }
  render(){
    return(
      <div className='Countries-item'>
        <Link to={"/countries"} className='coumties-back btn' >Back</Link>
        <ul className='countries-list-main-ul'>
            {this.showCountries()}  
        </ul>
      </div>
    )
  }
}

export default CountryPage;