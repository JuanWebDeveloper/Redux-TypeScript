import Store from './store/store';
import { counterReducer } from './reducers/counter.reducer';
import { decrementAction, divideAction, incrementAction, multiplyAction, resetAction } from './actions/operations.actions';

const store = new Store(counterReducer, 10);

console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());
