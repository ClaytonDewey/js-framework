import Router from './Router';
import Component from './Component';
import Store from './Store';

class Home extends Component {
  render() {
    return '<h1>Home</h1>';
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.store.getState().counter,
    };
    props.store.subscribe((state) => this.setState({ counter: state.counter }));
  }
  render() {
    return `
      <h1>About</h1>
      <p>Counter: ${this.state.counter}</p>
      <button onclick="store.setState({ counter: store.getState().counter + 1 })">Increment</button>
    `;
  }
}

const store = new Store({ counter: 0 });

const routes = [
  { path: '/', component: new Home() },
  { path: '/about', component: new About() },
];

const router = new Router(routes);
window.router = router;
window.store = store;

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello, World!',
    };
  }

  render() {
    return `
      <div>
        <h1>${this.state.message}</h1>
        <button onclick="app.updateMessage()">Click Me</button>
      </div>
    `;
  }

  updateMessage() {
    this.setState({ message: 'Hello, Framework!' });
  }
}

const app = new App();
document.getElementById('root').innerHTML = app.render();
window.app = app; // Expose the app instance for event handlers

// https://medium.com/@asierr/building-a-vanilla-javascript-framework-fc59f53b09b9
