import React from 'react';
import ReactDOM from 'react-dom';

import { Counter } from './Counter';
import {
  increment,
  decrement
} from './state/actions/counter';

import store from './state/store';

const render = () => ReactDOM.render(
  <Counter
    store={store.getState()}
    handleInc={() => increment()}
    handleDec={() => decrement()}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
