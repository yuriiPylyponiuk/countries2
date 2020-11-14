import React from 'react';

class CounrtiesList extends React.Component{
  constructor(props){
    super(props)
  };
  render(){
    console.log(this.props.countiesList.counrties.data)
    return(
      <div>
        <button onClick={this.props.getCountry}>Show Countries</button>
        {/* {this.props.countiesList.counrties.data.map( item => {
          <li>{item.name}</li>
        })}  */}
      </div>
    )
  }
}

export default CounrtiesList;