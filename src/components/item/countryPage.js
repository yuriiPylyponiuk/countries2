import React from 'react';
import  { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from "react-router-dom";
import './countryPage.css'

class CountryPage extends React.Component{
  constructor(props){
    super(props);
    this.showCountries = this.showCountries.bind(this);
  }
  componentDidMount(){
    const link = 'https://restcountries.eu/rest/v2/name/';
    let newUrl = this.props.match.params.item;

    newUrl= newUrl[0].toUpperCase() + newUrl.slice(1).toLowerCase();
    newUrl = link + newUrl;
    this.props.getNewCountry(newUrl)
  }
  showCountries(){
    if(this.props.countriesList.countries.show && this.props.countriesList.countries.data){
      return(
        this.props.countriesList.countries.data.map( item => {
          return(
            <li key = {uuidv4()} className='countries-list-main-ul-li country-list-ul' >
              <div className='countries-list-main-ul-li-info'>
                <h3>{item.name}</h3>
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
      <div>
        <Link to={"/countries"} className='coumties-back btn' >Back</Link>
        <ul className='countries-list-main-ul'>
            {this.showCountries()}  
        </ul>
      </div>
    )
  }
}

export default CountryPage;