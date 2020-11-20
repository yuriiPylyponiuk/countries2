import { 
  SEND_FINDING_TEXT,
  FIND_COUNTRY_LINK,
  FIND_COUNTRY_SUCCESS,
  FIND_COUNTRY_ERROR
} from '../constants/ActionTypes';


import { countiesList } from '../reducers';

export function sendFindingTextFunc(data){
  return{ type: SEND_FINDING_TEXT, payload: data}
}
let getCounties = () => fetch("https://restcountries.eu/rest/v2/all")

const getNewCountry = async (dispatch, data) => {
  console.log(data)
  dispatch({ type:  FIND_COUNTRY_LINK });
  try {
      const response = await getCounties();
      const res = await response.json();
      dispatch({ type: FIND_COUNTRY_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: FIND_COUNTRY_ERROR, payload: e });
  }
};

export const getNewCountryFunc = (dispatch, data) => {
  return () => getNewCountry(dispatch, data);
}

//export function getNewCountryFunc(data){
//   console.log(data)
//   fetch(data)
//       .then(response => response.json())
//       .then(data => {
//         return{ type: SEND_FINDING_TEXT, payload: data}
//         })
  
// }