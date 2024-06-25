class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listner) => listner(this.state));
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }
}

export default Store;
