import { decrementAction, divideAction, incrementAction, multiplyAction, resetAction } from './actions/operations.actions';
import { counterReducer } from './reducers/counter.reducer';

console.log(counterReducer(30, incrementAction)); // 31

console.log(counterReducer(15, decrementAction)); // 14

console.log(counterReducer(10, multiplyAction)); // 50

console.log(counterReducer(25, divideAction)); // 5

console.log(counterReducer(10, resetAction)); // 0
