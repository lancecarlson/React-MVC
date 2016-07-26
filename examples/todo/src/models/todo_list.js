import Immutable from 'immutable';

let TodoRecord = Immutable.Record({
  name: '',
  items: new Immutable.OrderedSet()
});

export default class TodoList extends TodoRecord {
  static all() {
    return fetch('/api/todo_lists.json')
      .then(res => res.json())
      .then(results => results.map(result => new TodoList(result)));
  }
}
