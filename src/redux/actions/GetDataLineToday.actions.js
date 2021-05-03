import axios from 'axios';

export const GET_DATA_LINETODAY_REQUEST = 'GET_DATA_LINETODAY_REQUEST';
export const GET_DATA_LINETODAY_SUCCESS = 'GET_DATA_LINETODAY_SUCCESS';
export const GET_DATA_LINETODAY_ERROR = 'GET_DATA_LINETODAY_ERROR';
export const GET_FILTER_CATEGORY = 'GET_FILTER_CATEGORY'

export const getDataLineTodayRequest = () => {
  return {
    type: GET_DATA_LINETODAY_REQUEST
  }
}

export const getDataLineTodaySuccess = (result) => {
  return {
    type: GET_DATA_LINETODAY_SUCCESS,
    result
  }
}

export const getDataLineTodayError = (error) => {
  return {
    type: GET_DATA_LINETODAY_ERROR,
    error
  }
}

export const filterCategory = (name) => {
  return {
    type: GET_FILTER_CATEGORY,
    name
  }
}

export const getDataLineToday = () => {
  return function(dispatch) {
    dispatch(getDataLineTodayRequest())

    axios
      .get(process.env.REACT_APP_GET_LINETODAY)
      .then((result) => dispatch(getDataLineTodaySuccess(result.data)))
      .catch((error) => dispatch(getDataLineTodayError(error)))
  }
}