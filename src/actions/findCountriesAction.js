import { 
  SEND_FINDING_TEXT,
  FIND_COUNTRY_LINK,
  FIND_COUNTRY_SUCCESS,
  FIND_COUNTRY_ERROR
} from '../constants/ActionTypes';


export function sendFindingTextFunc(data){
  return{ type: SEND_FINDING_TEXT, payload: data}
}
let getCounties = (data) => fetch(data)

const getNewCountry = async (dispatch, data) => {
  dispatch({ type:  FIND_COUNTRY_LINK });
  try {
      const response = await getCounties(data);
      const res = await response.json();
      dispatch({ type: FIND_COUNTRY_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: FIND_COUNTRY_ERROR, payload: e });
  }
};

export const getNewCountryFunc = (dispatch, data) => {
  return (data) => getNewCountry(data, dispatch);
}