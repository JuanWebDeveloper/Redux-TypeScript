import Store from './store/store.js';
import { counterReducer } from './reducers/counter.reducer.js';
import { decrementAction, divideAction, incrementAction, multiplyAction, resetAction } from './actions/operations.actions.js';
const store = new Store(counterReducer, 10);
const count = document.getElementById('count');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
count.innerHTML = store.getState();
increment.addEventListener('click', () => {
  store.dispatch(incrementAction);
  count.innerHTML = store.getState();
});
decrement.addEventListener('click', () => {
  store.dispatch(decrementAction);
  count.innerHTML = store.getState();
});
reset.addEventListener('click', () => {
  store.dispatch(resetAction);
  count.innerHTML = store.getState();
});
multiply.addEventListener('click', () => {
  store.dispatch(multiplyAction);
  count.innerHTML = store.getState();
});
divide.addEventListener('click', () => {
  store.dispatch(divideAction);
  count.innerHTML = store.getState();
});
