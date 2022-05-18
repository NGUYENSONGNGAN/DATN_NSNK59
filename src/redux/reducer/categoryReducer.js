import {
  ALL_CATEGORY_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  CLEAR_ERRORS,
} from '../types/categoryTypes';

export const categoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
      // case ADMIN_CATEGORY_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };

    // case ADMIN_CATEGORY_SUCCESS:
    //   return {
    //     loading: false,
    //     categories: action.payload,
    //   };
    case ALL_CATEGORY_FAIL:
      // case ADMIN_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
