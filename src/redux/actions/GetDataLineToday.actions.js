import axios from 'axios';

export const GET_DATA_LINETODAY_REQUEST = 'GET_DATA_LINETODAY_REQUEST';
export const GET_DATA_LINETODAY_SUCCESS = 'GET_DATA_LINETODAY_SUCCESS';
export const GET_DATA_LINETODAY_ERROR = 'GET_DATA_LINETODAY_ERROR';

export const getDataLineTodayRequest = () => {
  return {
    type: GET_DATA_LINETODAY_REQUEST
  }
}

export const getDataLineTodaySuccess = (res) => {
  return {
    type: GET_DATA_LINETODAY_SUCCESS,
    res
  }
}

export const getDataLineTodayError = (error) => {
  return {
    type: GET_DATA_LINETODAY_ERROR,
    error
  }
}

export const getDataLineToday = () => {
  return function(dispatch) {
    dispatch(getDataLineTodayRequest())

    axios
      .get(process.env.REACT_APP_GET_LINETODAY)
      .then((res) => dispatch(getDataLineTodaySuccess(res.data)))
      .catch((error) => dispatch(getDataLineTodayError(error)))
  }
}