import ReactDOM from 'react-dom';

export default class ApplicationController {
  render(component) {
    ReactDOM.render(
      component,
      document.getElementById('layout')
    );
  }
}
