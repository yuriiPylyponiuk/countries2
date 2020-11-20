import { 
  GET_POST_BY_LINK,
  GET_POST_BY_SUCCESS,
  GET_POST_BY_ERROR,
  HIDE_ALL_COUNTRIES,
  SHOW_ALL_COUNTRIES
} from '../constants/ActionTypes'

const initialState = {
  counrties: {
    data: [],
    loaded: false,
    error: false,
    show: false
  },
}

const countiesList = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_BY_LINK:
      return{
        ...state,
        counrties: {
          data: false,
          loaded: true,
          error: false,
          show: false
        }
      }
    case GET_POST_BY_SUCCESS:
      return{
        ...state,
        counrties: {
          data: action.payload,
          loaded: false,
          error: false,
          show: true
        }
      }
    case GET_POST_BY_ERROR:
      return{
        ...state,
        counrties: {
          data: false,
          loaded: false,
          error: action.payload,
          show: false
        }
      }
    case  HIDE_ALL_COUNTRIES:
      return{
        ...state,
        counrties: {
          data: state.counrties.data,
          loaded: false,
          error: false,
          show: false
        }
      }
    case  SHOW_ALL_COUNTRIES:
      return{
        ...state,
        counrties: {
          data: state.counrties.data,
          loaded: false,
          error: false,
          show: true
        }
      }
    default: 
      return state;
  }
}

export default countiesList;