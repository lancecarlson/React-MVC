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

export const list = (ctx) => {
  let page = ctx.params.page;
  render(<TodoListTable onMount={fetchTodoLists(page)} />);
}

export const show = (ctx) => {
  render(<TodoListDisplay />);
}
