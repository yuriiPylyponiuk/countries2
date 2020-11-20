import { 
  SEND_FINDING_TEXT,
  FIND_COUNTRY_LINK,
  FIND_COUNTRY_SUCCESS,
  FIND_COUNTRY_ERROR
} from '../constants/ActionTypes';

import countiesList from './importdataReducer'

const initialState = {
  counrties: {
    data: [],
    loaded: false,
    error: false,
    show: false
  },
  findingData: ''
}

const findingCounry = (state = initialState, action) => {
  switch (action.type) {
    case SEND_FINDING_TEXT:
      return{
        ...state,
        findingData: action.payload
      }
      case FIND_COUNTRY_LINK:
        return{
          ...state,
          counrties: {
            data: false,
            loaded: true,
            error: false,
            show: false
          }
        }
      case FIND_COUNTRY_SUCCESS:
        return{
          ...state,
          counrties: {
            data: action.payload,
            loaded: false,
            error: false,
            show: true
          }
        }
      case FIND_COUNTRY_ERROR:
        return{
          ...state,
          counrties: {
            data: false,
            loaded: false,
            error: action.payload,
            show: false
          }
        }
    default: 
      return state;
  }
}

export default findingCounry;