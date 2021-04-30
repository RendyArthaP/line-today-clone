import {
  GET_DATA_LINETODAY_REQUEST,
  GET_DATA_LINETODAY_SUCCESS,
  GET_DATA_LINETODAY_ERROR
} from '../actions/GetDataLineToday.actions.js';

const initialState = {
  data: {},
  isLoading: true
}

const handleGetDataLineToday = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_LINETODAY_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_DATA_LINETODAY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result
      }
    case GET_DATA_LINETODAY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default handleGetDataLineToday;