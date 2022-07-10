import Store from './store/store';
import { counterReducer } from './reducers/counter.reducer';
import { decrementAction, divideAction, incrementAction, multiplyAction, resetAction } from './actions/operations.actions';

const store = new Store(counterReducer, 10);

// Elementos HTML
const count: any = document.getElementById('count');
const increment: any = document.getElementById('increment');
const decrement: any = document.getElementById('decrement');
const reset: any = document.getElementById('reset');
const multiply: any = document.getElementById('multiply');
const divide: any = document.getElementById('divide');

// Mostrar el contador en el HTML
count.innerHTML = store.getState();

// Eventos de click para mutar el estado del store (el contador).
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
