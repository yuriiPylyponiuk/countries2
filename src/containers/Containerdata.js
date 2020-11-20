import React from 'react'
import { connect } from 'react-redux'
import { getCountryFunc, hideCountryFunc, showCountryFunc} from '../actions/importApi';
import CounrtiesList from '../components/CounrtiesList/CounrtiesList';
import { countiesList } from '../reducers';


const CountryContainer = ({ hideCountry,countiesList, getCountry, showCountry }) => (
  <CounrtiesList
      countiesList={countiesList}
      getCountry={getCountry}
      hideCountry={hideCountry}
      showCountry={showCountry}
  />

)
const mapStateToProps= (state) => ({
  countiesList: state.countiesList
})
const mapDispatchToProps = dispatch => {
    return {
      getCountry: getCountryFunc(dispatch),
      hideCountry: hideCountryFunc(dispatch),
      showCountry: showCountryFunc(dispatch),
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryContainer);

