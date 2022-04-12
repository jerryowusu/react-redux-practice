import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import tutorialReducer from './tutorials';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  tutorialReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
