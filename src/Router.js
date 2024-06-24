class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadInitialRoute();
    window.onpopstate = () => this.loadRoute(window.location.pathname);
  }

  loadInitialRoute() {
    const path = window.location.pathname;
    this.loadRoute(path);
  }

  loadRoute(path) {
    const matchedRoute = this.routes.find((route) => route.path === path);
    if (matchedRoute) {
      document.getElementById('root').innerHTML =
        matchedRoute.component.render();
    }
  }

  navigate(path) {
    window.history.pushState({}, path, window.location.origin + path);
    this.loadRoute(path);
  }
}

export default Router;
