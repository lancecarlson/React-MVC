/* Polyfills */
import 'whatwg-fetch';
import 'html5-history-api';

import page from 'page';

/* es6 class example*/
import WelcomeController from './controllers/welcome_controller';

let welcomeController = new WelcomeController();
page('/', welcomeController.welcome());

import * as todo from './controllers/todo_controller';

/* functional example */
page('/todo_lists', todo.list);
page('/todo_lists/page/:page', todo.list);
page('/todo_lists/:id', todo.show);

page();
