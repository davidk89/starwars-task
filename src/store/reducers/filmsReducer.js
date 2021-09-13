import { FILMS_SET_DATA } from '../actions/filmsAction';

const initialState = {
  data: null,
};

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FILMS_SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
