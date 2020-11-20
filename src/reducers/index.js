import { combineReducers } from 'redux';
import countiesList from './importdataReducer';
import findingCounry from './findingReducer';


export default combineReducers({
  countiesList,
  findingCounry
})