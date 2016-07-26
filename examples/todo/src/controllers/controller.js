/* example functional style controller utilities */
import ReactDOM from 'react-dom';

export const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('layout')
  );
}
