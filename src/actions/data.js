import callApi from '../api';
import types from '../config/actionTypes';

export function callDataSuccess(payload) {
  return (dispatch) => {
    dispatch({ type: types.API_DATA_SUCCESS, payload });
  };
}

export function callDataFailure(error) {
  return (dispatch) => {
    dispatch({ type: types.API_DATA_FAILURE, error });
  };
}

export function callDataRequest() {
  return (dispatch) => {
    callApi(
      'r/aww.json',
      {},
      response => dispatch(callDataSuccess(response.data.children)),
      error => dispatch(callDataFailure(error)),
    );
    dispatch({ type: types.API_DATA_REQUEST });
  };
}
