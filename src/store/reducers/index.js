import { combineReducers } from 'redux';
import planets from './planetsReducer';
import films from './filmsReducer';
import residents from './residentsReducer';
import handler from './handlersReducer';

const reducers = combineReducers({
  planets,
  films,
  residents,
  handler,
});

export default reducers;
