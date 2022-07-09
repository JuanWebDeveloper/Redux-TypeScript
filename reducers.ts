import { Action } from './actions';

export const reducer = (state = 10, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return (state += 1);

    case 'DECREMENT':
      return (state -= 1);

    case 'MULTIPLY':
      return state * action.payload;

    case 'DIVIDE':
      return state / action.payload;

    default:
      return state;
  }
};
