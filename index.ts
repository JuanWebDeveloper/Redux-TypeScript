import { Action } from './actions';
import { reducer } from './reducers';

const incrementAction: Action = {
  type: 'INCREMENT',
};

console.log(reducer(30, incrementAction));
