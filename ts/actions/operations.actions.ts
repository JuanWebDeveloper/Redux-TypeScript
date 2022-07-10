import { Action } from '../model/action';

const incrementAction: Action = {
  type: 'INCREMENT',
};

const decrementAction: Action = {
  type: 'DECREMENT',
};

const multiplyAction: Action = {
  type: 'MULTIPLY',
  payload: 5,
};

const divideAction: Action = {
  type: 'DIVIDE',
  payload: 5,
};

const resetAction: Action = {
  type: 'RESET',
};

export { incrementAction, decrementAction, multiplyAction, divideAction, resetAction };
