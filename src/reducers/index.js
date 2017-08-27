import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import bobyTopReducer from './bodyTop';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  bobyTop: bobyTopReducer
});

export default rootReducer;
