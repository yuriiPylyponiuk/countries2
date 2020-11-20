import { 
  GET_POST_BY_LINK,
  GET_POST_BY_SUCCESS,
  GET_POST_BY_ERROR,
  HIDE_ALL_COUNTRIES,
  SHOW_ALL_COUNTRIES,
  SEND_FINDING_TEXT,
  FIND_COUNTRY_LINK,
  FIND_COUNTRY_SUCCESS,
  FIND_COUNTRY_ERROR,
} from '../constants/ActionTypes'

const initialState = {
  countries: {
    data: [],
    loaded: false,
    error: false,
    show: false
  },
  findingData: ''
}

const countriesList = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_BY_LINK:
      return{
        ...state,
        countries: {
          data: false,
          loaded: true,
          error: false,
          show: false
        }
      }
    case GET_POST_BY_SUCCESS:
      return{
        ...state,
        countries: {
          data: action.payload,
          loaded: false,
          error: false,
          show: true
        }
      }
    case GET_POST_BY_ERROR:
      return{
        ...state,
        countries: {
          data: false,
          loaded: false,
          error: action.payload,
          show: false
        }
      }
    case  HIDE_ALL_COUNTRIES:
      return{
        ...state,
        countries: {
          data: state.countries.data,
          loaded: false,
          error: false,
          show: false
        }
      }
    case  SHOW_ALL_COUNTRIES:
      return{
        ...state,
        countries: {
          data: state.countries.data,
          loaded: false,
          error: false,
          show: true
        }
      }
      case SEND_FINDING_TEXT:
        return{
          ...state,
          findingData: action.payload
        }
      case FIND_COUNTRY_LINK:
        return{
          ...state,
          countries: {
            data: false,
            loaded: true,
            error: false,
            show: false
          }
        }
      case FIND_COUNTRY_SUCCESS:
        return{
          ...state,
          countries: {
            data: action.payload,
            loaded: false,
            error: false,
            show: true
          }
        }
      case FIND_COUNTRY_ERROR:
        return{
          ...state,
          countries: {
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

export default countriesList;