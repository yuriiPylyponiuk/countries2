import React from 'react';
import './findComonentStyle.css';


class HendleFindCountrie extends React.Component{
  constructor(props){
    super(props)
    this.trigerData= this.trigerData.bind(this);
    this.findCountry= this.findCountry.bind(this);
  }

  trigerData(e){
    let a = e.target.value
    this.props.sendFindingText(a)
  }


  findCountry(e){
    e.preventDefault();
    const link = 'https://restcountries.eu/rest/v2/name/';

    if(this.props.countiesList.findingData !== ''){
      let newUrl = this.props.countiesList.findingData;

      newUrl= newUrl[0].toUpperCase() + newUrl.slice(1).toLowerCase();
      newUrl = link + newUrl;
      this.props.getNewCountry(newUrl)
    }else{
      let a = 'https://restcountries.eu/rest/v2/all';

      this.props.getNewCountry(a)
      alert('enter country name')
    }
  }

  render(){
    return(
      <div className='countries-list-main-block'>
        <form className='countries-list-main-block-block' onSubmit={this.findCountry}>
          <input className='countries-list-main-block-input' onChange={ this.trigerData} value={this.props.findingData} type="text" placeholder='Enter name of country'/>
          <button className='countries-list-main-block-btn btn'>Find Country</button>
        </form>
      </div> 
    )
  }
}

export default HendleFindCountrie;