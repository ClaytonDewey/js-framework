import Router from './Router';
import Component from './Component';

class Home extends Component {
  render() {
    return '<h1>Home</h1>';
  }
}

class About extends Component {
  render() {
    return '<h1>About</h1>';
  }
}

const routes = [
  { path: '/', component: new Home() },
  { path: '/about', component: new About() },
];

const router = new Router(routes);
window.router = router;

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
