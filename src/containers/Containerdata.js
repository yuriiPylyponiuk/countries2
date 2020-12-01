import React from 'react'
import { connect } from 'react-redux'
import { getCountryFunc, hideCountryFunc, showCountryFunc, loadMoreCountriesFunc} from '../actions/importApi';
import CounrtiesList from '../components/CounrtiesList/CounrtiesList';
import { countriesList } from '../reducers';


const CountryContainer = ({ hideCountry, loadMore, findingData, countries, getCountry, showCountry, loadMoreCountries }) => (
  <CounrtiesList
      countries={countries}
      loadMore={loadMore}
      findingData={findingData}
      getCountry={getCountry}
      hideCountry={hideCountry}
      showCountry={showCountry}
      loadMoreCountries={loadMoreCountries}
  />

)
const mapStateToProps= (state) => ({
  countries: state.countriesList.countries,
  loadMore: state.countriesList.loadMore,
  findingData: state.countriesList.findingData,
})
const mapDispatchToProps = dispatch => {
    return {
      getCountry: getCountryFunc(dispatch),
      hideCountry: hideCountryFunc(dispatch),
      showCountry: showCountryFunc(dispatch),
      loadMoreCountries: loadMoreCountriesFunc(dispatch)
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryContainer);

