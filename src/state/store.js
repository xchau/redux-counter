import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import appReducer from './reducers';

export default createStore(
  appReducer,
  applyMiddleware(logger)
);
