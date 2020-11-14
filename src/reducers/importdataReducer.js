import { 
  GET_POST_BY_LINK,
} from '../constants/ActionTypes'

const initialState = {
  counrties: {
    data: [],
    loaded: false,
  },
}

const countiesList = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_BY_LINK:
      return{
        ...state,
        counrties: {
          data: action.payload,
          loaded: true,
        }
      }
    default: 
      return state;
  }
}

export default countiesList;