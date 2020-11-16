import React from 'react'
import { connect } from 'react-redux'
import { getCountryFunc, hideCountryFunc} from '../actions/importApi';
import CounrtiesList from '../components/CounrtiesList/CounrtiesList';
import { countiesList } from '../reducers';



const CountryContainer = ({ hideCountry,countiesList, getCountry }) => (
  <CounrtiesList
      countiesList={countiesList}
      getCountry={getCountry}
      hideCountry={hideCountry}
  />
)
const mapStateToProps= (state) => ({
  countiesList: state.countiesList
})
const mapDispatchToProps = dispatch => {
    return {
      getCountry: getCountryFunc(dispatch),
      hideCountry: hideCountryFunc(dispatch),
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryContainer)