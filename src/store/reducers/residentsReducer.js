import { RESIDENTS_SET_DATA } from '../actions/residentsAction';

const initialState = {
  data: null,
};

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case RESIDENTS_SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
