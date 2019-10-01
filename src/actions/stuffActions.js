import * as types from './actionTypes';

function url() {
  return 'https://1880276d-e839-4ad5-b23f-195232ef296d.mock.pstmn.io/api/v2/influencers/campaigns';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json};
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log("JSON", json.data.campaigns)
      dispatch(receiveStuff(json.data.campaigns))
    })
    .catch((err) => console.log(err))
  }
}