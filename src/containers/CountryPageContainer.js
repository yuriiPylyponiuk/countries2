import React from 'react'
import { connect } from 'react-redux'
import { getNewCountryFunc } from '../actions/findCountriesAction';
import CountryPage from '../components/item/countryPage';
import { countriesList } from '../reducers';


const NewCountryPage = ({ countriesList, getNewCountry, match }) => (
  <CountryPage
  countriesList={countriesList}
  getNewCountry={getNewCountry}
  match={match}
  />
  
  )
  const mapStateToProps= (state, match) => ({
    countriesList: state.countriesList,

  })
  const mapDispatchToProps = dispatch => {
    return {
      getNewCountry: (data) => dispatch(getNewCountryFunc(data)),
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCountryPage);