import React from 'react';

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

    if(this.props.findingCounry.findingData !== ''){
      let newUrl = this.props.findingCounry.findingData;
      newUrl= newUrl[0].toUpperCase() + newUrl.slice(1).toLowerCase();
      newUrl = link + newUrl;
      this.props.getNewCountry(newUrl)
    }else{
      alert('enter country name')
    }
  }

  render(){
    return(
      <div className='countries-list-main-block-input'>
        <form onSubmit={this.findCountry}>
          <input onChange={ this.trigerData} value={this.props.findingData} type="text"/>
          <button>Find Country</button>
        </form>
      </div> 
    )
  }
}

export default HendleFindCountrie;