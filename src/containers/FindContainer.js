import React from 'react'
import { connect } from 'react-redux'
import { sendFindingTextFunc, getNewCountryFunc } from '../actions/findCountriesAction';
import HendleFindCountrie from '../components/find/FindComponent';
import { countiesList, findingData } from '../reducers';


const FindCountryContainer = ({ findingData, countiesList, sendFindingText, getNewCountry }) => (
  <HendleFindCountrie
    findingData={findingData}
    countiesList={countiesList}
    sendFindingText={sendFindingText}
    getNewCountry={getNewCountry}
  />

)
const mapStateToProps= (state) => ({
  countiesList: state.countiesList
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