import Component from './Component';

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
