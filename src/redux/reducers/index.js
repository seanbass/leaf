import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import loginReducer from './login';
import navReducer from './nav';
import userReducer from './user';

export default combineReducers({
  nav: navReducer,
  login: loginReducer,
  user: userReducer,
  form: formReducer
});