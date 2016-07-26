import React, { Component, PropTypes }  from 'react';
import { Layout } from '../components/layout';

export class TodoListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: null
    };
  }
  
  componentDidMount() {
    this.props.onMount().then(data => this.setState(data));
  }
  
  render() {
    let todoLists = this.state.todoLists;
    if (!todoLists) {
      return <Layout>Loading...</Layout>;
    }

    return (
      <Layout>
	<h1>Todo Lists</h1>
	<table>
	  <tbody>
	    {todoLists.map(todoList => {
	    return <tr>
	      <td><a href="/todo_lists/">{todoList.name}</a></td>
	      <td>Delete</td>
	    </tr>
	    })}
	  </tbody>
	</table>
      </Layout>
    );
  }
}

export class TodoListDisplay extends React.Component {
  render() {
    return (
      <ul>
	<TodoItem name={'test'} />
      </ul>
    );
  }
}

export class TodoItem extends React.Component {
  render () {
    return (
      <li>{this.props.name}</li>
    );
  }
}
