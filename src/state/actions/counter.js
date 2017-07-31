import store from '../store';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants/constants';

export const increment = () => {
  store.dispatch({
    type: INCREMENT_COUNTER
  });
};

export const decrement = () => {
  store.dispatch({
    type: DECREMENT_COUNTER
  });
};
