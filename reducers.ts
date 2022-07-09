import { Action } from './actions';

export const reducer = (state = 10, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return (state += 1);

    default:
      return state;
  }
};
