import React from 'react'
import { connect } from 'react-redux'
import { sendFindingTextFunc, getNewCountryFunc } from '../actions/findCountriesAction';
import HendleFindCountrie from '../components/find/FindComponent';
import { countriesList } from '../reducers';


const FindCountryContainer = ({ countriesList, sendFindingText, getNewCountry }) => (
  <HendleFindCountrie
    countriesList={countriesList}
    sendFindingText={sendFindingText}
    getNewCountry={getNewCountry}
  />

)
const mapStateToProps= (state) => ({
  countriesList: state.countriesList
})
const mapDispatchToProps = dispatch => {
    return {
      sendFindingText: (data) => dispatch(sendFindingTextFunc(data)),
      getNewCountry: (data) => dispatch(getNewCountryFunc(data)),
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindCountryContainer);