import {
  GET_DATA_LINETODAY_REQUEST,
  GET_DATA_LINETODAY_SUCCESS,
  GET_DATA_LINETODAY_ERROR,
  GET_FILTER_CATEGORY
} from '../actions/GetDataLineToday.actions.js';

const initialState = {
  data: {},
  oldData: [],
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
      const getCategory = action.result.result.categories.filter((article) => article.name === 'TOP');
      return {
        ...state,
        isLoading: false,
        data: action.result,
        oldData: getCategory
      }
    case GET_DATA_LINETODAY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case GET_FILTER_CATEGORY:
      const getCategories = state.data.result.categories.filter((article) => article.name === action.name);
      return {
        ...state,
        oldData: getCategories
      }
    default:
      return state
  }
}

export default handleGetDataLineToday;