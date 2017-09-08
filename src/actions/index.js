import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE} from './types';

const ROOT_URL = 'http://localhost:9090';

export function signinUser(params){
    return function (dispatch){
      axios.post(`${ROOT_URL}/signin`, params)
          .then(response => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
          })
          .catch(() => {
            dispatch({ type: AUTH_ERROR, payload: 'Login error!!!!' });
          });
    }
}

export function signupUser(params){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, params)
    .then(response =>{
        dispatch({ type: AUTH_USER, payload: 'Register is success'});
        localStorage.setItem('token', response.data.token);

        browserHistory.push('/signin');
    })
    .catch( response =>
      dispatch({ type: AUTH_ERROR, payload: response.data.error})
    );
  }
}

export function signoutUser(){
  localStorage.removeItem('token');
  return { type: UNAUTH_USER}
}

export function fetchMessage(){
  return function(dispatch){
      axios.get(ROOT_URL, {
        headers: {authorization: localStorage.getItem('token')}
      })
       .then(response => {
          dispatch({
            type: FETCH_MESSAGE,
            payload: response.data.message
          })
       })
}
}
