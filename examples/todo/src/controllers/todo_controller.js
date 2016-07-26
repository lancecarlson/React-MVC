import React from 'react';
import { render } from './controller';
import { TodoListTable, TodoListDisplay } from '../components/todos';
import TodoList from '../models/todo_list';

const fetchTodoLists = (page) => {
  return () => {
    return TodoList.all(page).then(todoLists => {
      return {todoLists};
    });
  }
}

const fetchTodoList = (id) => {
  return () => {
    return TodoList.find(id);
  }
}

const deleteTodoList = (todoList) => {
  return todoList.del();
}

export const list = (ctx) => {
  let page = ctx.params.page;
  render(<TodoListTable fetchData={fetchTodoLists(page)} onDelete={deleteTodoList} />);
}

export const show = (ctx) => {
  let id = ctx.params.id;
  render(<TodoListDisplay defaultData={new TodoList()} fetchData={fetchTodoList(id)} />);
}
