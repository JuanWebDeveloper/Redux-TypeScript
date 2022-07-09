import { Action } from './actions';
import { reducer } from './reducers';

const incrementAction: Action = {
  type: 'INCREMENT',
};

console.log(reducer(30, incrementAction)); // 31

const decrementAction: Action = {
  type: 'DECREMENT',
};

console.log(reducer(15, decrementAction)); // 14

const multiplyAction: Action = {
  type: 'MULTIPLY',
  payload: 5,
};

console.log(reducer(10, multiplyAction)); // 50

const divideAction: Action = {
  type: 'DIVIDE',
  payload: 5,
};

console.log(reducer(25, divideAction)); // 5
