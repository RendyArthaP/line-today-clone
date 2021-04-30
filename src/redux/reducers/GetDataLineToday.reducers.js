import {
  GET_DATA_LINETODAY_REQUEST,
  GET_DATA_LINETODAY_SUCCESS,
  GET_DATA_LINETODAY_ERROR
} from '../actions/GetDataLineToday.actions.js';

const initialState = {
  data: {}
}

const handleGetDataLineToday = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_LINETODAY_REQUEST:
      return {
        ...state
      }
    case GET_DATA_LINETODAY_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_DATA_LINETODAY_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default handleGetDataLineToday;