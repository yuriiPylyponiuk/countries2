import React from 'react'
import { connect } from 'react-redux'
import { sendFindingTextFunc, getNewCountryFunc } from '../actions/findCountriesAction';
import HendleFindCountrie from '../components/find/FindComponent';
import { findingCounry } from '../reducers';


const FindCountryContainer = ({ findingCounry, sendFindingText, getNewCountry }) => (
  <HendleFindCountrie
    findingCounry={findingCounry}
    sendFindingText={sendFindingText}
    getNewCountry={getNewCountry}
  />

)
const mapStateToProps= (state) => ({
  findingCounry: state.findingCounry
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