import types from '../config/actionTypes';

const initialState = { loading: false, data: [], error: null };

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.API_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.API_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
