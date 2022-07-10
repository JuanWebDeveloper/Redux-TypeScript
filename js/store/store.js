export default class Store {
    constructor(reducer, state) {
        this.reducer = reducer;
        this.state = state;
    }
    getState() {
        return this.state;
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}
