import React, { Component } from 'react';
import './styles/counter.css';

export const Counter = (props) => {
  return (
    <div>
      { props.store.counter }
      <button
        onClick={props.handleInc}
      >+</button>
      <button
        onClick={props.handleDec}
      >-</button>
    </div>
  );
};
