import { 
  GET_POST_BY_LINK,
  GET_POST_BY_SUCCESS,
  GET_POST_BY_ERROR,
  HIDE_ALL_COUNTRIES,
  SHOW_ALL_COUNTRIES,
  SEND_FINDING_TEXT,
  FIND_COUNTRY_LINK,
  FIND_COUNTRY_SUCCESS,
  FIND_COUNTRY_ERROR
} from '../constants/ActionTypes';
import {
  getCounties
} from '../api/fetchquery';



const getCountry = async dispatch => {
  dispatch({ type:  GET_POST_BY_LINK });

  try {
      const response = await getCounties();
      const res = await response.json();
      dispatch({ type: GET_POST_BY_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: GET_POST_BY_ERROR, payload: e });
  }
};



const hideCountry = async dispatch => {
  dispatch({ type:  HIDE_ALL_COUNTRIES });
};
const showCountry = async dispatch => {
  dispatch({ type:  SHOW_ALL_COUNTRIES });
};



///////

export function sendFindingTextFunc(data){
  return{ type: SEND_FINDING_TEXT, payload: data}
}

let getNewCounties = (data) => fetch(data)

const getNewCountry = async (dispatch, data) => {
  dispatch({ type:  FIND_COUNTRY_LINK });
  try {
      const response = await getNewCounties(data);
      const res = await response.json();
      dispatch({ type: FIND_COUNTRY_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: FIND_COUNTRY_ERROR, payload: e });
  }
};

export const getNewCountryFunc = (dispatch, data) => {
  return (data) => getNewCountry(data, dispatch);
}

//////


export const getCountryFunc = dispatch => {
  return () => getCountry(dispatch);
}
export const hideCountryFunc = dispatch => {
  return () => hideCountry(dispatch);
}
export const showCountryFunc = dispatch => {
  return () => showCountry(dispatch);
}

