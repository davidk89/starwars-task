import { SET_ERROR, SET_LOADING } from '../actions/handlersAction';

const initialState = {
  isLoading: true,
  error: null,
};

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
