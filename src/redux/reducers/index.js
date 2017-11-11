import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import login from './login';
import nav from './nav';

export default combineReducers({
  nav,
  login,
  form: formReducer
});