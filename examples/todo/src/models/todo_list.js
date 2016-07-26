import Immutable from 'immutable';

let TodoRecord = Immutable.Record({
  id: null,
  name: '',
  items: new Immutable.OrderedSet()
});

export default class TodoList extends TodoRecord {
  static all() {
    return fetch('/api/todo_lists.json')
      .then(res => res.json())
      .then(results => new Immutable.List(results.map(result => new TodoList(result))));
  }

  static find(id) {
    return this.all().then(results => results.find(todoList => todoList.id == id))
  }

  save() {
    // Not tested, but here for an example.
    return fetch(`/api/todo_lists/${this.id}`, {
      credentials: 'same-origin',
      method: 'post',
      headers: {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
      },
      body: JSON.stringify(this)
    });
  }

  del() {
    return fetch(`/api/todo_lists/${this.id}`, {
      credentials: 'same-origin',
      method: 'delete'
    });
  }
}
