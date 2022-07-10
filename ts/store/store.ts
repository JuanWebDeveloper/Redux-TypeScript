import { Action } from '../model/action';
import { Reducer } from '../model/reducer';

export default class Store<T> {
  //   private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {}

  getState(): T {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}
