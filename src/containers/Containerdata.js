import React from 'react'
import { connect } from 'react-redux'
import { getCountryFunc, hideCountryFunc, showCountryFunc} from '../actions/importApi';
import CounrtiesList from '../components/CounrtiesList/CounrtiesList';
import { countriesList } from '../reducers';


const CountryContainer = ({ hideCountry,countries, getCountry, showCountry }) => (
  <CounrtiesList
      countries={countries}
      getCountry={getCountry}
      hideCountry={hideCountry}
      showCountry={showCountry}
  />

)
const mapStateToProps= (state) => ({
  countries: state.countriesList.countries
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

