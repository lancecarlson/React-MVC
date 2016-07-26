import React from 'react';
import ApplicationController from './application_controller';
import { Welcome } from '../components/welcome';

/* Example of es6 controller */
export default class WelcomeController extends ApplicationController {
  welcome(ctx) {
    return (req, res) => {
      let name = 'Lance';
      this.render(<Welcome name={name} />);
    }
  }
}
