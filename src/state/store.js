import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import appReducer from './reducers';

const middleware = applyMiddleware(
  logger()
);

export default createStore(
  appReducer,
  middleware
);
