import React, { Component, PropTypes }  from 'react';
import { Layout } from '../components/layout';

export class TodoListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: null
    };
  }

  fetchData() {
    return this.props.fetchData();
  }
  
  componentDidMount() {
    this.fetchData().then(data => this.setState(data));
  }

  onDelete(todoList, e) {
    console.log('on delete');
    this.props.onDelete(todoList).then((result) => this.fetchData());
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
	      <td><a href={`/todo_lists/${todoList.id}`}>{todoList.name}</a></td>
	      <td><a href="#" onClick={this.onDelete.bind(this, todoList)}>Delete</a></td>
	    </tr>
	    })}
	  </tbody>
	</table>
      </Layout>
    );
  }
}

export class TodoListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: this.props.defaultData
    };
  }

  fetchData() {
    return this.props.fetchData().then(data => this.setState({todoList: data}));
  }

  componentDidMount() {
    this.fetchData();
  }
  
  render() {
    let todoList = this.state.todoList;

    return (
      <Layout>
	<h1>{todoList.name}</h1>
	<ul>
	  <TodoItem name={'test'} />
	</ul>
      </Layout>
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
