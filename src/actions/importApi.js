import { 
  GET_POST_BY_LINK
} from '../constants/ActionTypes';
import {
  getCounties
} from '../api/fetchquery';



const getCountry = async dispatch => {
  dispatch({ type:  GET_POST_BY_LINK });

  try {
      const response = await getCounties();
      const res = await response.json();
      dispatch({ type: GET_POST_BY_LINK, payload: res });
  } catch (e) {
      dispatch({ type: GET_POST_BY_LINK, payload: e });
  }
};


export const getCountryFunc = dispatch => {
  return () => getCountry(dispatch);
}