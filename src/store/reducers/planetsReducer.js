import { PLANETS_SET_DATA } from '../actions/planetsAction';

const initialState = {
  data: null,
};

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PLANETS_SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
