import * as types from './actionTypes'

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, payload: json}
}

export function fetchStuff() {
  return dispatch => {
    return fetch(process.env.REACT_APP_URL, {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.data && json.data.campaigns) {
        dispatch(receiveStuff(json.data.campaigns))
      } else {
        throw new Error('Something went wrong')
      }
    })
    .catch((err) => console.log(err))
  }
}