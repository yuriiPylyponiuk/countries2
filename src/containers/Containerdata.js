import React from 'react'
import { connect } from 'react-redux'
import { getCountryFunc} from '../actions/importApi';
import CounrtiesList from '../components/CounrtiesList/CounrtiesList';
import { countiesList } from '../reducers';



const CountryContainer = ({ countiesList, getCountry }) => (
  <CounrtiesList
      countiesList={countiesList}
      getCountry={getCountry}
  />
)
const mapStateToProps= (state) => ({
  countiesList: state.countiesList
})
const mapDispatchToProps = dispatch => {
    return {
        getCountry: getCountryFunc(dispatch)
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryContainer)