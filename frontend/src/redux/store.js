import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import leadsReducer from './reducers/leadsReducer';
import errorsReducer from './reducers/errorsReducer';
import messagesReducer from './reducers/messagesReducer';
import authReducer from './reducers/authReducer';

const middleware = [thunk];
const initialState = {};

const reducers = combineReducers({
  leads: leadsReducer,
  errors: errorsReducer,
  messages:messagesReducer,
  auth:authReducer
});

const store = createStore(reducers, initialState,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;